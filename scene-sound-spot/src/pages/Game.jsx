import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SkipForward, Eye, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import gameData from "../lib/gameData";
import { generateLetterPool, shuffleArray, checkAnswer, getAlphaIndices } from "../lib/gameUtils";
import GameHeader from "../components/game/GameHeader";
import SceneCard from "../components/game/SceneCard";
import SongSlots from "../components/game/SongSlots";
import LetterPool from "../components/game/LetterPool";
import CorrectBanner from "../components/game/CorrectBanner";
import GameComplete from "../components/game/GameComplete";

export default function Game() {
  const [questionOrder, setQuestionOrder] = useState(() => shuffleArray(gameData));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  // Current question
  const question = questionOrder[currentIndex];

  // Letter pool for current question
  const [letterPool, setLetterPool] = useState([]);
  // Filled letters: index in song -> letter string or null
  const [filledLetters, setFilledLetters] = useState({});
  // Used pool indices
  const [usedPoolIndices, setUsedPoolIndices] = useState(new Set());
  // Full-string character array (spaces included) for slot indexing
  const songChars = question ? question.song.toUpperCase().split("") : [];
  const alphaIndices = question ? getAlphaIndices(question.song) : [];

  // Initialize when question changes
  useEffect(() => {
    if (!question) return;
    const pool = generateLetterPool(question.song);
    setLetterPool(pool);
    setFilledLetters({});
    setUsedPoolIndices(new Set());
    setIsCorrect(false);
    setShowHint(false);
  }, [currentIndex, question]);

  // Find next empty alphabetic slot (using full-string indices)
  const findNextEmptySlot = useCallback(() => {
    for (const i of alphaIndices) {
      if (!filledLetters[i]) return i;
    }
    return -1;
  }, [alphaIndices, filledLetters]);

  // Handle letter selection from pool
  const handleSelectLetter = useCallback((poolIdx) => {
    if (isCorrect) return;
    const slotIdx = findNextEmptySlot();
    if (slotIdx === -1) return;

    const newFilled = { ...filledLetters, [slotIdx]: letterPool[poolIdx] };
    const newUsed = new Set(usedPoolIndices);
    newUsed.add(poolIdx);

    setFilledLetters(newFilled);
    setUsedPoolIndices(newUsed);

    // Check if all slots are filled
    const allFilled = alphaIndices.every(i => newFilled[i]);
    if (allFilled && checkAnswer(question.song, newFilled)) {
      setIsCorrect(true);
      setScore(prev => prev + 1);
    }
  }, [isCorrect, findNextEmptySlot, filledLetters, letterPool, usedPoolIndices, songChars, question]);

  // Handle removing a letter from slots
  const handleRemoveLetter = useCallback((slotIdx) => {
    if (isCorrect) return;
    const letter = filledLetters[slotIdx];
    if (!letter) return;

    // Find the pool index for this letter
    const poolIdx = letterPool.findIndex((l, i) => usedPoolIndices.has(i) && l === letter && 
      !Object.entries(filledLetters).some(([sIdx, sLetter]) => 
        Number(sIdx) !== slotIdx && sLetter === letter && 
        [...usedPoolIndices].indexOf(i) !== -1
      )
    );

    // Simpler: just find first used pool index with this letter
    let foundPoolIdx = -1;
    for (const idx of usedPoolIndices) {
      if (letterPool[idx] === letter) {
        // Check this pool index isn't "needed" by another slot
        foundPoolIdx = idx;
        break;
      }
    }

    const newFilled = { ...filledLetters };
    delete newFilled[slotIdx];
    const newUsed = new Set(usedPoolIndices);
    if (foundPoolIdx !== -1) newUsed.delete(foundPoolIdx);

    setFilledLetters(newFilled);
    setUsedPoolIndices(newUsed);
  }, [isCorrect, filledLetters, letterPool, usedPoolIndices]);

  // Next question
  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questionOrder.length) {
      setGameFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, questionOrder.length]);

  // Skip (no penalty)
  const handleSkip = useCallback(() => {
    handleNext();
  }, [handleNext]);

  // Restart
  const handleRestart = useCallback(() => {
    setQuestionOrder(shuffleArray(gameData));
    setCurrentIndex(0);
    setScore(0);
    setGameFinished(false);
    setIsCorrect(false);
  }, []);

  // Show hint: reveal the artist
  const handleHint = useCallback(() => {
    setShowHint(true);
  }, []);

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <GameComplete score={score} total={questionOrder.length} onRestart={handleRestart} />
        <Link to="/" className="mt-4 text-sm text-muted-foreground font-body hover:text-primary transition-colors">
          ← Back to Home
        </Link>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col px-4 py-6">
      <GameHeader currentIndex={currentIndex} totalQuestions={questionOrder.length} score={score} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col items-center"
        >
          <SceneCard movie={question.movie} scene={question.scene} image={question.image} />

          {/* Artist hint */}
          <div className="w-full max-w-2xl mx-auto mb-4 text-center">
            {showHint ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-body text-sm text-primary font-medium"
              >
                <Volume2 className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                Artist: {question.artist}
              </motion.p>
            ) : (
              <button
                onClick={handleHint}
                className="font-body text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                Show artist hint
              </button>
            )}
          </div>

          <SongSlots
            songTitle={question.song}
            filledLetters={filledLetters}
            onRemoveLetter={handleRemoveLetter}
          />

          {isCorrect ? (
            <CorrectBanner song={question.song} artist={question.artist} onNext={handleNext} />
          ) : (
            <>
              <LetterPool
                letters={letterPool}
                usedIndices={usedPoolIndices}
                onSelectLetter={handleSelectLetter}
              />

              {/* Skip button */}
              <div className="mt-6 mb-4">
                <Button
                  variant="ghost"
                  onClick={handleSkip}
                  className="rounded-full font-body text-muted-foreground hover:text-foreground"
                >
                  <SkipForward className="w-4 h-4 mr-1.5" />
                  Skip this one
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}