import { useState } from "react";
import { Clapperboard } from "lucide-react";

export default function SceneCard({ movie, scene, image }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-primary/10 border border-border/50">
        {!imgError ? (
          <img
            src={image}
            alt={`Scene from ${movie}`}
            className="w-full h-48 sm:h-64 object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-primary/20 via-secondary to-accent flex items-center justify-center">
            <Clapperboard className="w-16 h-16 text-primary/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-body font-medium mb-2">
            🎬 {movie}
          </span>
          <p className="text-white font-body text-sm sm:text-base leading-relaxed drop-shadow-lg">
            {scene}
          </p>
        </div>
      </div>
    </div>
  );
}