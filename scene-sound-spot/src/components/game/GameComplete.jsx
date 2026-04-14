import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Star } from "lucide-react";

export default function GameComplete({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  let message = "You're a true cinephile! 🎬";
  if (percentage < 30) message = "Time for a movie marathon! 🍿";
  else if (percentage < 60) message = "Not bad, keep watching! 🎥";
  else if (percentage < 90) message = "Impressive movie knowledge! 🌟";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md mx-auto text-center py-12 px-6"
    >
      <motion.div
        initial={{ rotate: -10, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center"
      >
        <Trophy className="w-12 h-12 text-primary" />
      </motion.div>

      <h2 className="font-display text-3xl font-bold text-foreground mb-2">
        Game Complete!
      </h2>
      <p className="font-body text-muted-foreground mb-8">{message}</p>

      <div className="bg-card border border-border rounded-2xl p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          <span className="font-display text-4xl font-bold text-foreground">{score}</span>
          <span className="text-muted-foreground font-body text-lg">/ {total}</span>
        </div>
        <p className="text-sm text-muted-foreground font-body">
          scenes correctly identified
        </p>
        <div className="mt-4 w-full h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-pink-400 rounded-full"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-body">{percentage}% accuracy</p>
      </div>

      <Button
        onClick={onRestart}
        size="lg"
        className="rounded-full px-8 font-body font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Play Again
      </Button>
    </motion.div>
  );
}