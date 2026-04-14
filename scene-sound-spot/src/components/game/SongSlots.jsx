import { motion, AnimatePresence } from "framer-motion";

// Uses the full string index (including spaces) so indices match Game.jsx exactly
export default function SongSlots({ songTitle, filledLetters, onRemoveLetter }) {
  const chars = songTitle.toUpperCase().split(""); // keep spaces in index

  // Group chars into words (split at spaces) for visual word wrapping
  const groups = [];
  let currentGroup = [];
  let currentGroupStartIdx = 0;
  let spaceCount = 0;

  chars.forEach((char, idx) => {
    if (char === " ") {
      if (currentGroup.length > 0) {
        groups.push({ chars: currentGroup, startIdx: currentGroupStartIdx });
        currentGroup = [];
      }
      currentGroupStartIdx = idx + 1;
    } else {
      if (currentGroup.length === 0) currentGroupStartIdx = idx;
      currentGroup.push({ char, idx });
    }
  });
  if (currentGroup.length > 0) {
    groups.push({ chars: currentGroup, startIdx: currentGroupStartIdx });
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <p className="text-center text-xs font-body text-muted-foreground mb-3 tracking-widest uppercase">
        Song Title
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
        {groups.map((group, groupIdx) => (
          <div key={groupIdx} className="flex items-center gap-1">
            {group.chars.map(({ char, idx }) => {
              const filled = filledLetters[idx];
              const isSpecial = /[^A-Z]/.test(char);

              if (isSpecial) {
                return (
                  <div
                    key={idx}
                    className="w-5 h-9 sm:w-6 sm:h-11 flex items-center justify-center"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold text-foreground/60">
                      {char}
                    </span>
                  </div>
                );
              }

              return (
                <motion.button
                  key={idx}
                  onClick={() => filled && onRemoveLetter(idx)}
                  className={`w-7 h-9 sm:w-9 sm:h-11 rounded-lg flex items-center justify-center font-body font-semibold text-sm sm:text-base transition-all duration-200 ${
                    filled
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 cursor-pointer hover:scale-105 active:scale-95"
                      : "bg-muted/80 border-2 border-dashed border-border cursor-default"
                  }`}
                  whileTap={filled ? { scale: 0.9 } : {}}
                >
                  <AnimatePresence mode="wait">
                    {filled && (
                      <motion.span
                        key={filled + idx}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        {filled}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}