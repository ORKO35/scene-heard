import { motion } from "framer-motion";

const pastelColors = [
  "bg-pink-100 text-pink-700 border-pink-200",
  "bg-purple-100 text-purple-700 border-purple-200",
  "bg-blue-100 text-blue-700 border-blue-200",
  "bg-teal-100 text-teal-700 border-teal-200",
  "bg-amber-100 text-amber-700 border-amber-200",
  "bg-rose-100 text-rose-700 border-rose-200",
  "bg-indigo-100 text-indigo-700 border-indigo-200",
  "bg-emerald-100 text-emerald-700 border-emerald-200",
];

export default function LetterPool({ letters, usedIndices, onSelectLetter }) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {letters.map((letter, idx) => {
          const isUsed = usedIndices.has(idx);
          const colorClass = pastelColors[idx % pastelColors.length];

          return (
            <motion.button
              key={idx}
              onClick={() => !isUsed && onSelectLetter(idx)}
              disabled={isUsed}
              className={`w-9 h-10 sm:w-11 sm:h-12 rounded-xl flex items-center justify-center font-body font-bold text-sm sm:text-base border-2 transition-all duration-200 ${
                isUsed
                  ? "opacity-20 scale-90 cursor-default bg-muted border-border text-muted-foreground"
                  : `${colorClass} cursor-pointer hover:scale-110 hover:shadow-md active:scale-95 shadow-sm`
              }`}
              whileHover={!isUsed ? { y: -3 } : {}}
              whileTap={!isUsed ? { scale: 0.85 } : {}}
            >
              {letter}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}