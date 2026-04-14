import { motion } from "framer-motion";
import { Check, Music } from "lucide-react";

export default function CorrectBanner({ song, artist, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto mt-4"
    >
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
            <Check className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold text-emerald-700">Correct!</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-emerald-600 font-body text-sm">
          <Music className="w-4 h-4" />
          <span className="font-semibold">{song}</span>
          <span className="text-emerald-500">by</span>
          <span>{artist}</span>
        </div>
        <motion.button
          onClick={onNext}
          className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-body font-semibold text-sm transition-colors shadow-md shadow-emerald-500/20"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Next Scene →
        </motion.button>
      </div>
    </motion.div>
  );
}