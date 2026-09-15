import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { CoffeeBean, SteamWisp } from './Illustrations';
import { cafeAudio } from '../lib/cafeAudio';

export function QuickRealityCheckSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mugWobble, setMugWobble] = useState(false);
  const [mugToast, setMugToast] = useState<string | null>(null);
  const [beanToast, setBeanToast] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
  });

  const handleMugClick = () => {
    cafeAudio.playDing();
    setMugWobble(true);
    const quotes = [
      '*Sip* 100% human energy restored! ☕✨',
      'Refill approved! Life feels manageable again. 😌',
      'Better humans yesterday, even better today! 🚀',
      'Ahhh... fresh caffeine hitting the bloodstream! 🧠⚡',
    ];
    setMugToast(quotes[Math.floor(Math.random() * quotes.length)]);
    setTimeout(() => setMugWobble(false), 500);
    setTimeout(() => setMugToast(null), 3200);
  };

  const handleBeanClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    cafeAudio.playBeanPop();
    const beanPhrases = [
      'Crunch! Roasted Arabica bean! 🫘',
      '+10mg instant caffeine! ⚡',
      'Single-origin bean discovered! ☕',
      'Dark roast delight! 🌰',
    ];
    setBeanToast(beanPhrases[Math.floor(Math.random() * beanPhrases.length)]);
    setTimeout(() => setBeanToast(null), 2500);
  };

  const toggleCheck = (index: number) => {
    cafeAudio.playPop();
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="reality-check-section" className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 select-none">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Side: Torn Paper Reality Check Card with subtle scroll entrance */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }}
          className="relative flex-1 w-full"
        >
          {/* Main Torn Parchment Note */}
          <div
            className="relative bg-[#FFF2C6] border-2.5 border-[#221507] rounded-2xl p-6 sm:p-8 shadow-hard-roast"
            style={{
              clipPath: 'polygon(0% 2%, 2% 0%, 98% 1%, 100% 3%, 99% 97%, 97% 100%, 2% 99%, 0% 97%)',
            }}
          >
            {/* Header */}
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#221507] tracking-tight mb-5">
              A quick reality check
            </h3>

            {/* Checklist with hand-drawn style checkmarks */}
            <ul className="space-y-3.5 font-body text-sm sm:text-base text-[#221507]/90 leading-relaxed">
              <li
                onClick={() => toggleCheck(0)}
                className="flex items-start gap-3 cursor-pointer group hover:text-[#221507] transition-colors"
              >
                <span className="w-5 h-5 rounded-md border-2 border-[#221507] bg-white flex items-center justify-center font-bold text-[#221507] text-xs leading-none select-none flex-shrink-0 mt-0.5 shadow-hard-sm group-hover:bg-amber-100 transition-colors">
                  {checkedItems[0] ? '✓' : ''}
                </span>
                <span>
                  This is a <strong>live, approximate count</strong> based on global coffee consumption data.
                </span>
              </li>
              <li
                onClick={() => toggleCheck(1)}
                className="flex items-start gap-3 cursor-pointer group hover:text-[#221507] transition-colors"
              >
                <span className="w-5 h-5 rounded-md border-2 border-[#221507] bg-white flex items-center justify-center font-bold text-[#221507] text-xs leading-none select-none flex-shrink-0 mt-0.5 shadow-hard-sm group-hover:bg-amber-100 transition-colors">
                  {checkedItems[1] ? '✓' : ''}
                </span>
                <span>
                  It's <strong>not exact</strong>. It's a <strong>vibe</strong>.
                </span>
              </li>
              <li
                onClick={() => toggleCheck(2)}
                className="flex items-start gap-3 cursor-pointer group hover:text-[#221507] transition-colors"
              >
                <span className="w-5 h-5 rounded-md border-2 border-[#221507] bg-white flex items-center justify-center font-bold text-[#221507] text-xs leading-none select-none flex-shrink-0 mt-0.5 shadow-hard-sm group-hover:bg-amber-100 transition-colors">
                  {checkedItems[2] ? '✓' : ''}
                </span>
                <span>
                  Numbers <strong>update in real time</strong> (ish).
                </span>
              </li>
              <li
                onClick={() => toggleCheck(3)}
                className="flex items-start gap-3 cursor-pointer group hover:text-[#221507] transition-colors"
              >
                <span className="w-5 h-5 rounded-md border-2 border-[#221507] bg-white flex items-center justify-center font-bold text-[#221507] text-xs leading-none select-none flex-shrink-0 mt-0.5 shadow-hard-sm group-hover:bg-amber-100 transition-colors">
                  {checkedItems[3] ? '✓' : ''}
                </span>
                <span>
                  Built for <strong>humans</strong> who love coffee (and the internet).
                </span>
              </li>
            </ul>
          </div>

          {/* Sticky Note Taped on Left Corner (Matches Reference) */}
          <div className="absolute -bottom-5 -left-2 sm:-left-4 bg-[#FFC94A] border-2 border-[#221507] shadow-hard-sm rounded-xl px-3 py-2 -rotate-6 transform max-w-[130px] sm:max-w-[150px] text-center z-20">
            {/* Translucent tape strip */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-8 h-4 bg-white/75 border border-[#221507]/30 rotate-3" />
            <p className="font-display font-bold text-xs sm:text-sm text-[#221507] leading-tight">
              Life Happens Coffee Helps 🙂
            </p>
          </div>
        </motion.div>

        {/* Right Side: Arrow + 'Better Humans Yesterday' Steaming Mug with scroll entrance */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.15, ease: 'easeOut' }}
          className="flex flex-col items-center text-center lg:items-center justify-center pt-4 lg:pt-0 relative"
        >
          {/* Handwritten Annotation + Curved Arrow */}
          <div className="flex flex-col items-center mb-3">
            <span className="font-body text-xs sm:text-sm font-semibold text-[#221507]/80 italic">
              Not science.
              <br />
              Just for fun.
            </span>
            <svg viewBox="0 0 24 32" fill="none" className="w-5 h-7 text-[#221507] mt-1" aria-hidden="true">
              <path
                d="M12,2 Q14,16 12,28 M12,28 L6,22 M12,28 L18,22"
                stroke="#221507"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Big Mug: Better Humans Yesterday */}
          <div className="relative">
            {/* Steam rising */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none">
              <SteamWisp className="w-4 h-8" variant={2} />
            </div>

            {/* Playful pop-up when mug clicked */}
            <AnimatePresence>
              {mugToast && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -20, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 22 }}
                  className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap pointer-events-none"
                >
                  <div className="bg-[#221507] text-[#FFF6E9] px-3.5 py-1.5 rounded-full border-2 border-white shadow-hard-roast font-display font-bold text-xs flex items-center gap-1.5">
                    <span>☕</span>
                    <span>{mugToast}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mug Body with click feedback & wobble */}
            <motion.div
              onClick={handleMugClick}
              animate={mugWobble ? { rotate: [-6, 6, -3, 3, 0], scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.45 }}
              title="Click to take a sip!"
              className="relative w-36 sm:w-44 bg-white hover:bg-amber-50/50 border-3 border-[#221507] rounded-3xl p-4 sm:p-5 shadow-hard-roast text-center cursor-pointer select-none active:scale-95 transition-all"
            >
              {/* Mug rim ellipse with coffee liquid */}
              <div className="w-full h-3.5 bg-[#4A2C1D] border-1.5 border-[#221507] rounded-full mb-3 relative overflow-hidden">
                <div className="absolute inset-x-2 top-0.5 h-1 bg-[#6F4E37] rounded-full opacity-60" />
              </div>
              {/* Text on Mug */}
              <p className="font-display font-bold text-base sm:text-lg text-[#221507] leading-tight">
                Better
                <br />
                Humans
                <br />
                Yesterday
              </p>
              {/* Mug Handle */}
              <div className="absolute -right-6 top-6 w-7 h-16 border-3 border-l-0 border-[#221507] rounded-r-2xl bg-white -z-10 shadow-hard-sm" />

              {/* Little hint badge */}
              <span className="absolute -bottom-2 right-2 bg-[#FFC94A] text-[#221507] border border-[#221507] text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-hard-sm">
                tap me!
              </span>
            </motion.div>

            {/* Scattered Coffee Beans around base with hidden click interaction */}
            <div className="flex items-center justify-center gap-2 mt-3 relative">
              <motion.button
                onClick={handleBeanClick}
                whileHover={{ scale: 1.25, rotate: 20 }}
                whileTap={{ scale: 0.85 }}
                title="Tap coffee bean"
                className="cursor-pointer p-1 -m-1 focus:outline-none"
              >
                <CoffeeBean className="w-5 h-5 rotate-45 transform" />
              </motion.button>
              <motion.button
                onClick={handleBeanClick}
                whileHover={{ scale: 1.25, rotate: -25 }}
                whileTap={{ scale: 0.85 }}
                title="Tap coffee bean"
                className="cursor-pointer p-1 -m-1 focus:outline-none"
              >
                <CoffeeBean className="w-4 h-4 -rotate-12 transform" />
              </motion.button>
              <motion.button
                onClick={handleBeanClick}
                whileHover={{ scale: 1.25, rotate: 110 }}
                whileTap={{ scale: 0.85 }}
                title="Tap coffee bean"
                className="cursor-pointer p-1 -m-1 focus:outline-none"
              >
                <CoffeeBean className="w-4.5 h-4.5 rotate-90 transform" />
              </motion.button>
              <motion.button
                onClick={handleBeanClick}
                whileHover={{ scale: 1.25, rotate: -60 }}
                whileTap={{ scale: 0.85 }}
                title="Tap coffee bean"
                className="cursor-pointer p-1 -m-1 focus:outline-none"
              >
                <CoffeeBean className="w-4 h-4 -rotate-45 transform" />
              </motion.button>

              {/* Bean toast bubble */}
              <AnimatePresence>
                {beanToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 5, scale: 0.85 }}
                    animate={{ opacity: 1, y: -15, scale: 1 }}
                    exit={{ opacity: 0, y: -22, scale: 0.9 }}
                    className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap pointer-events-none"
                  >
                    <div className="bg-[#4A2C1D] text-[#FFF6E9] px-2.5 py-1 rounded-full border border-white shadow-hard-sm font-body text-[11px] font-bold">
                      {beanToast}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
