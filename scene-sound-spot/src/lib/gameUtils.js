// Generate a shuffled letter pool from the song title + distractor letters
export function generateLetterPool(songTitle) {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  // Get the letters from the song title (only A-Z)
  const titleLetters = songTitle
    .toUpperCase()
    .split("")
    .filter(ch => /[A-Z]/.test(ch));

  // Add distractor letters (roughly 40-60% of title length)
  const numDistractors = Math.max(4, Math.floor(titleLetters.length * 0.5));
  const distractors = [];
  for (let i = 0; i < numDistractors; i++) {
    distractors.push(ALPHABET[Math.floor(Math.random() * 26)]);
  }

  const allLetters = [...titleLetters, ...distractors];
  
  // Shuffle using Fisher-Yates
  for (let i = allLetters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allLetters[i], allLetters[j]] = [allLetters[j], allLetters[i]];
  }

  return allLetters;
}

// Shuffle an array (Fisher-Yates)
export function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Check if the answer is correct
// filledLetters is keyed by full-string char index (spaces included)
export function checkAnswer(songTitle, filledLetters) {
  const chars = songTitle.toUpperCase().split("");
  for (let i = 0; i < chars.length; i++) {
    if (/[A-Z]/.test(chars[i])) {
      if (filledLetters[i] !== chars[i]) return false;
    }
  }
  return true;
}

// Get all alphabetic indices of a song title (full string indices)
export function getAlphaIndices(songTitle) {
  return songTitle.toUpperCase().split("").reduce((acc, ch, i) => {
    if (/[A-Z]/.test(ch)) acc.push(i);
    return acc;
  }, []);
}