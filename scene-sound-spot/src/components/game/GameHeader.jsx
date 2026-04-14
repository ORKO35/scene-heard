import { Film } from "lucide-react";

export default function GameHeader({ currentIndex, totalQuestions, score }) {
  const progress = ((currentIndex) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Film className="w-5 h-5 text-primary" />
          <h1 className="font-display text-xl font-bold text-foreground tracking-tight">
            Scene & Heard
          </h1>
        </div>
        <div className="flex items-center gap-4 text-sm font-body">
          <span className="text-muted-foreground">
            Round <span className="font-semibold text-foreground">{currentIndex + 1}</span> / {totalQuestions}
          </span>
          <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-xs">
            ★ {score}
          </span>
        </div>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-pink-400 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}