import { motion } from "framer-motion";

function WaveText({
  children,
  className,
  startHidden = false,
  loop = true,
  startDelay = 0.0,
}) {
  const generateTimings = (s, delay) => {
    const timings = [];
    const letters = s.split("");
    const letterDelayIncrement = delay / (letters.length / 2);
    let currentDelay = delay;
    let decend = true;
    for (const i in letters) {
      if (currentDelay <= 0.0) decend = false;
      if (decend) {
        // decending
        currentDelay -= letterDelayIncrement;
        if (currentDelay < 0.0) timings.push(0.0);
        else timings.push(currentDelay);
      } else {
        // ascending
        currentDelay += letterDelayIncrement;
        if (currentDelay < 0.0) timings.push(0.0);
        else timings.push(currentDelay);
      }
    }
    return timings;
  };

  const waveTimings = generateTimings(children, 0.7);

  return (
    <div id="" className="flex">
      {children.split("").map((letter, i) => {
        const delay = waveTimings[i];
        const txtVariants = {
          changeColor: {
            color: [
              "rgba(255, 255, 255, 1)",
              "rgba(0, 20, 99, 1)",
              "rgba(255, 255, 255, 1)",
            ],
            opacity: startHidden ? [0, 1] : 1,
            scale: [1.0, 1.7, 1.0],
            transition: {
              delay: startDelay + delay,
              duration: 0.5,
              type: "tween",
              ease: "easeOut",
              repeat: loop ? Infinity : 0,
              repeatDelay: 10,
            },
          },
          hide: {
            opacity: startHidden ? 0 : 1,
          },
        };

        return (
          <motion.div
            key={i}
            animate="changeColor"
            variants={txtVariants}
            className={`${className}`}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.div>
        );
      })}
    </div>
  );
}

export default WaveText;
