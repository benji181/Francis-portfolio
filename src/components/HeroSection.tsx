import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemContext";
import LineWaves from "@/components/LineWaves/LineWaves.tsx";

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Dimmed purple palette – matches global background
  const color1 = isDark ? "#9333ea" : "#6b21a8";   // Purple-600 (was #6b21a8)
  const color2 = isDark ? "#c084fc" : "#86198f";   // Purple-400 (was #86198f)
  const color3 = isDark ? "#e879f9" : "#831843";   // Fuchsia-400 (was #831843)
  return (
      <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
      >
        {/* Wave background layer */}
        <div className="absolute inset-0 -z-10">
          <LineWaves
              speed={0.3}
              innerLineCount={20}
              outerLineCount={20}
              warpIntensity={0.5}
              rotation={0}
              edgeFadeWidth={0}
              colorCycleSpeed={0.8}
              brightness={isDark ? 0.1 : 0.03}
              color1={color1}
              color2={color2}
              color3={color3}
              enableMouseInteraction={false}
          />
        </div>

        {/* Subtle overlay for text contrast */}
        <div className="absolute inset-0 -z-5 bg-background/30 backdrop-blur-[3px]" />

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
          >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            UI/UX & Graphic Designer
          </span>
          </motion.div>

          <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Francis</span>
          </motion.h1>

          <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
          >
            I craft meaningful digital experiences through thoughtful UI/UX design
            and striking visual identities that leave a lasting impression.
          </motion.p>

          <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex items-center justify-center gap-4"
          >
            <a
                href="#portfolio"
                className="rounded-lg bg-gradient-blue px-8 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
            >
              View Portfolio
            </a>
            <a
                href="#contact"
                className="rounded-lg border border-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-20"
          >
            <a href="#about" className="inline-flex animate-bounce text-muted-foreground">
              <ArrowDown size={24} />
            </a>
          </motion.div>
        </div>
      </section>
  );
};

export default HeroSection;