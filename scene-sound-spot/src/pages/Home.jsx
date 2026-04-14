import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Film, Music, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const BANNER_IMG = "https://media.base44.com/images/public/69dd2cd6c077cc6149e98183/598afb6c2_generated_image.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Logo Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={BANNER_IMG}
              alt="Scene & Heard"
              className="w-64 sm:w-80 mx-auto rounded-2xl shadow-xl shadow-primary/15"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight"
          >
            Scene & Heard
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-6 mb-6"
          >
            <div className="flex items-center gap-1.5 text-muted-foreground font-body text-sm">
              <Film className="w-4 h-4 text-primary" />
              <span>42 Iconic Scenes</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground font-body text-sm">
              <Music className="w-4 h-4 text-primary" />
              <span>Legendary Songs</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground font-body text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Pure Fun</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto"
          >
            Dive into cinema's greatest moments through the soundtracks that stayed with us: discover a nostalgic gaming experience that puts your pop-culture knowledge to the test. Faced with iconic imagery, your mission is to identify the exact song playing in the background and reconstruct its title from a pool of letters and tricky distractors. It's an addictive blend of visual and auditory memory, transforming every classic scene into a captivating, adrenaline-fueled cinematic puzzle!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/play">
              <Button
                size="lg"
                className="rounded-full px-10 py-6 text-base font-body font-semibold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Start Playing
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-center pb-6 font-body text-xs text-muted-foreground/60">
        A Learning Technologies project — built with ♥ for cinema lovers
      </div>
    </div>
  );
}