import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  MountEverestIllustration,
  MoonIllustration,
  ElephantIllustration,
  EarthGlobeIllustration,
} from './Illustrations';
import { OTHER_WORDS_CARDS, OtherWordsCard } from '../lib/coffeeMath';
import { cafeAudio } from '../lib/cafeAudio';

interface InOtherWordsProps {
  cupsToday: number;
}

export function InOtherWordsSection({ cupsToday }: InOtherWordsProps) {
  const shouldReduceMotion = useReducedMotion();
  // Track which card is tapped on mobile to show alt joke
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const toggleAltJoke = (id: string) => {
    cafeAudio.playPop();
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-12 select-none">
      {/* Section Header with subtle scroll entrance */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6 sm:mb-8"
      >
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#221507] tracking-tight">
            In other words...
          </h2>
        </div>

        {/* Curved annotation note */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-body text-[#221507]/80 self-end sm:self-auto italic">
          <div className="text-right leading-tight">
            <span>Same coffee.</span>
            <br />
            <span>Different perspective.</span>
            <br />
            <span className="font-semibold text-[#221507]">Equally absurd.</span>
          </div>
          <svg viewBox="0 0 24 30" fill="none" className="w-5 h-6 text-[#221507] flex-shrink-0" aria-hidden="true">
            <path
              d="M4,4 Q18,6 16,22 M16,22 L11,18 M16,22 L20,18"
              stroke="#221507"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>

      {/* 4 Illustrated Equivalency Cards: Staggered entrance with Intersection Observer logic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {OTHER_WORDS_CARDS.map((card: OtherWordsCard, index: number) => {
          const comp = card.compute(cupsToday);
          const isFlipped = flippedCardId === card.id;

          return (
            <motion.div
              key={card.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.09,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              onClick={() => toggleAltJoke(card.id)}
              onMouseEnter={() => {
                if (flippedCardId !== card.id) {
                  setFlippedCardId(card.id);
                }
              }}
              onMouseLeave={() => {
                if (flippedCardId === card.id) {
                  setFlippedCardId(null);
                }
              }}
              className="group bg-[#FFF9F2] hover:bg-white border-2.5 border-[#221507] hover:border-[#FF3D7E] rounded-3xl p-5 shadow-hard hover:shadow-hard-roast hover:-translate-y-2 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out flex flex-col items-center justify-between text-center cursor-pointer relative min-h-[225px] transform-gpu"
            >
              {/* Illustration Top Anchor with gentle floating icon & hover scale */}
              <div className="w-24 h-22 flex items-center justify-center mb-3 group-hover:scale-108 transition-transform duration-300 ease-out">
                {card.type === 'everest' && (
                  <MountEverestIllustration className="w-22 h-20" />
                )}
                {card.type === 'moon' && (
                  <MoonIllustration className="w-20 h-20" />
                )}
                {card.type === 'elephant' && (
                  <ElephantIllustration className="w-24 h-20" />
                )}
                {card.type === 'ocean' && (
                  <EarthGlobeIllustration className="w-20 h-20" />
                )}
              </div>

              {/* Dynamic Text with bold numbers or funny alt joke */}
              <div className="flex-1 flex items-center justify-center px-1 min-h-[56px] w-full">
                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    <motion.p
                      key="stats"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="font-body text-sm sm:text-base text-[#221507] leading-snug"
                    >
                      {comp.before}
                      <strong className="font-display font-bold text-[#221507] text-base sm:text-lg">
                        {comp.bold}
                      </strong>
                      {comp.after}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="joke"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="font-body text-xs sm:text-sm text-[#FF3D7E] font-bold italic leading-snug"
                    >
                      "{card.altJoke}"
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Subtle tap/hover hint with hover cue */}
              <div className="mt-2 text-[11px] font-semibold text-[#221507]/50 group-hover:text-[#221507] transition-colors flex items-center gap-1">
                <span>{isFlipped ? 'tap to toggle' : 'tap for joke'}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
