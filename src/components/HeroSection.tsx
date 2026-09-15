import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  SparkleStar,
  CoffeeBean,
  SteamWisp,
  DeskPottedPlant,
  DeskLampIllustration,
  SleepingCatsOnBooks,
  DeskPencil,
} from './Illustrations';
import {
  HERO_EQUIVALENCIES,
  COUNTER_JOKES,
  formatWithCommas,
  HeroEquivalencyItem,
} from '../lib/coffeeMath';
import { cafeAudio } from '../lib/cafeAudio';
import { RotateCw, X } from 'lucide-react';

interface HeroSectionProps {
  cupsToday: number;
}

export function HeroSection({ cupsToday }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Equivalency state
  const [eqIndex, setEqIndex] = useState(0);
  const [showAltJoke, setShowAltJoke] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Counter easter egg & bounce
  const [toastJoke, setToastJoke] = useState<string | null>(null);
  const [lastJokeIndex, setLastJokeIndex] = useState<number | null>(null);
  const [counterBounce, setCounterBounce] = useState(false);
  const [counterToast, setCounterToast] = useState(false);

  // Hidden illustration interaction states
  const [illustrationBubble, setIllustrationBubble] = useState<{
    text: string;
    target: string;
  } | null>(null);
  const [plantWobble, setPlantWobble] = useState(false);
  const [mug1Wobble, setMug1Wobble] = useState(false);
  const [mug2Wobble, setMug2Wobble] = useState(false);
  const [catWobble, setCatWobble] = useState(false);
  const [lampOn, setLampOn] = useState(false);
  const [pencilBounce, setPencilBounce] = useState(false);
  const [beanSpinId, setBeanSpinId] = useState<number | null>(null);

  // Auto-cycle equivalencies every 5.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      cycleEquivalency();
    }, 5500);
    return () => clearInterval(interval);
  }, [eqIndex]);

  const cycleEquivalency = () => {
    setIsRotating(true);
    setEqIndex((prev) => (prev + 1) % HERO_EQUIVALENCIES.length);
    setShowAltJoke(false);
    setTimeout(() => setIsRotating(false), 500);
  };

  const handleManualCycle = () => {
    cycleEquivalency();
    cafeAudio.playPop();
  };

  // Easter egg confetti and joke generator when live counter is clicked
  const triggerEasterEgg = () => {
    let nextIdx = Math.floor(Math.random() * COUNTER_JOKES.length);
    if (COUNTER_JOKES.length > 1 && nextIdx === lastJokeIndex) {
      nextIdx = (nextIdx + 1) % COUNTER_JOKES.length;
    }
    setLastJokeIndex(nextIdx);
    setToastJoke(COUNTER_JOKES[nextIdx]);

    cafeAudio.playDing();
    setCounterBounce(true);
    setCounterToast(true);
    setTimeout(() => setCounterBounce(false), 400);
    setTimeout(() => setCounterToast(false), 1800);

    try {
      const prefersReducedMotion =
        shouldReduceMotion ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!prefersReducedMotion) {
        // Multi-angle festive coffee-themed burst
        const coffeePalette = [
          '#4A2C1D',
          '#7F5539',
          '#FFC94A',
          '#FF3D7E',
          '#00C2A8',
          '#FFF6E9',
        ];

        // Center explosion
        confetti({
          particleCount: 50,
          spread: 75,
          origin: { y: 0.36 },
          colors: coffeePalette,
          ticks: 200,
          disableForReducedMotion: true,
        });

        // Left cannon burst
        confetti({
          particleCount: 30,
          angle: 60,
          spread: 50,
          origin: { x: 0.1, y: 0.45 },
          colors: ['#FF3D7E', '#FFC94A', '#4A2C1D'],
          disableForReducedMotion: true,
        });

        // Right cannon burst
        confetti({
          particleCount: 30,
          angle: 120,
          spread: 50,
          origin: { x: 0.9, y: 0.45 },
          colors: ['#00C2A8', '#FFC94A', '#FF3D7E'],
          disableForReducedMotion: true,
        });
      }
    } catch {
      // safe ignore
    }
  };

  // Hidden illustration click handlers
  const showBubble = (text: string, target: string) => {
    setIllustrationBubble({ text, target });
    setTimeout(() => {
      setIllustrationBubble((prev) => (prev?.target === target ? null : prev));
    }, 2800);
  };

  const handlePlantClick = () => {
    cafeAudio.playPop();
    setPlantWobble(true);
    showBubble('Photosynthesizing with espresso steam! 🌱☕', 'plant');
    setTimeout(() => setPlantWobble(false), 500);
  };

  const handleMug1Click = () => {
    cafeAudio.playDing();
    setMug1Wobble(true);
    showBubble('*Sip* Breakthrough idea unlocked! 💡☕', 'mug1');
    setTimeout(() => setMug1Wobble(false), 500);
  };

  const handleCatClick = () => {
    cafeAudio.playPurr();
    setCatWobble(true);
    showBubble('Purrrrr... Chief Barista is resting 🐱💤', 'cat');
    setTimeout(() => setCatWobble(false), 600);
  };

  const handleMug2Click = () => {
    cafeAudio.playPop();
    setMug2Wobble(true);
    showBubble('Refill granted! Hot brew incoming ☕✨', 'mug2');
    setTimeout(() => setMug2Wobble(false), 500);
  };

  const handleLampClick = () => {
    cafeAudio.playSwitch();
    setLampOn((prev) => !prev);
    showBubble(!lampOn ? '💡 Study lamp turned ON!' : '🌙 Dimmed the café glow...', 'lamp');
  };

  const handlePencilClick = () => {
    cafeAudio.playPop();
    setPencilBounce(true);
    showBubble('*scribbling urgent coffee math* ✏️', 'pencil');
    setTimeout(() => setPencilBounce(false), 400);
  };

  const handleBeanClick = (id: number) => {
    cafeAudio.playBeanPop();
    setBeanSpinId(id);
    showBubble('+10mg roasted bean boost! 🫘⚡', `bean-${id}`);
    setTimeout(() => setBeanSpinId(null), 500);
  };

  const currentEq: HeroEquivalencyItem = HERO_EQUIVALENCIES[eqIndex];
  const eqData = currentEq.label(cupsToday);
  const formattedCups = formatWithCommas(cupsToday);

  return (
    <section className="relative w-full max-w-5xl mx-auto px-3 sm:px-6 pt-2 sm:pt-4 pb-4 select-none overflow-hidden">
      {/* Background Soft Sunset Window Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-44 sm:h-56 pointer-events-none -z-20 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 10%, rgba(255, 61, 126, 0.18) 0%, rgba(255, 201, 74, 0.22) 45%, transparent 75%)',
        }}
      />

      {/* Background ambient floating sparkles */}
      <div className="absolute left-6 sm:left-14 top-4 hidden sm:block opacity-70 pointer-events-none">
        <SparkleStar className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFC94A]" />
      </div>
      <div className="absolute right-8 sm:right-20 top-6 hidden sm:block opacity-70 pointer-events-none">
        <SparkleStar className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFC94A]" />
      </div>

      {/* Sticky Note Top Right: 'coffee people build cool things.' */}
      <div className="absolute right-4 sm:right-12 top-2 hidden md:block rotate-3 transform z-10 pointer-events-none">
        <div className="bg-[#FFFEF0] border-1.5 border-[#221507] shadow-hard-sm rounded p-2 max-w-[110px] text-center">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-[#FFF6E9]/85 border border-[#221507]/30 -rotate-2" />
          <p className="font-display font-bold text-[11px] text-[#221507] leading-tight">
            coffee people build cool things.
          </p>
        </div>
      </div>

      {/* Hero Center Block */}
      <div className="text-center relative z-10 max-w-3xl mx-auto">
        {/* Top contextual label */}
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-body text-sm sm:text-lg md:text-xl font-bold text-[#221507] tracking-tight mb-2 sm:mb-3"
        >
          Right now, humanity has consumed
        </motion.p>

        {/* Big Live Counter Container */}
        <div className="relative inline-block my-2 sm:my-3 max-w-full px-2">
          {/* Organic yellow backdrop blob */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-4 sm:-inset-x-10 -inset-y-2.5 sm:-inset-y-3.5 bg-[#FFC94A] -rotate-1 transform -z-10 border-2.5 sm:border-3 border-[#221507] shadow-hard-roast"
            style={{
              borderRadius: '44% 56% 62% 38% / 34% 45% 55% 66%',
            }}
          />

          {/* Speed rays flanking counter (3 on each side) */}
          <div
            aria-hidden="true"
            className="hidden md:flex absolute -left-10 lg:-left-14 top-1/2 -translate-y-1/2 flex-col gap-1.5 opacity-95 pointer-events-none"
          >
            <span className="w-6 lg:w-8 h-2 bg-[#FFC94A] border-2 border-[#221507] rounded-full -rotate-12 transform shadow-hard-sm" />
            <span className="w-8 lg:w-11 h-2.5 bg-[#FFC94A] border-2 border-[#221507] rounded-full shadow-hard-sm" />
            <span className="w-6 lg:w-8 h-2 bg-[#FFC94A] border-2 border-[#221507] rounded-full rotate-12 transform shadow-hard-sm" />
          </div>
          <div
            aria-hidden="true"
            className="hidden md:flex absolute -right-10 lg:-right-14 top-1/2 -translate-y-1/2 flex-col gap-1.5 opacity-95 pointer-events-none"
          >
            <span className="w-6 lg:w-8 h-2 bg-[#FFC94A] border-2 border-[#221507] rounded-full rotate-12 transform shadow-hard-sm" />
            <span className="w-8 lg:w-11 h-2.5 bg-[#FFC94A] border-2 border-[#221507] rounded-full shadow-hard-sm" />
            <span className="w-6 lg:w-8 h-2 bg-[#FFC94A] border-2 border-[#221507] rounded-full -rotate-12 transform shadow-hard-sm" />
          </div>

          {/* Floating burst toast on counter tap */}
          <AnimatePresence>
            {counterToast && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: -28, scale: 1 }}
                exit={{ opacity: 0, y: -45, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none whitespace-nowrap"
              >
                <div className="bg-[#FF3D7E] text-white px-3 py-1 rounded-full border-2 border-[#221507] font-display font-bold text-xs sm:text-sm shadow-hard-sm flex items-center gap-1">
                  <span>🎉</span>
                  <span>+1 Cup for Humanity! ☕</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ticking interactive number with responsive typography & tactile scale bounce */}
          <motion.button
            id="hero-counter-button"
            onClick={triggerEasterEgg}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                triggerEasterEgg();
              }
            }}
            animate={
              counterBounce && !shouldReduceMotion
                ? { scale: [1, 1.07, 0.96, 1] }
                : {}
            }
            transition={{ duration: 0.35 }}
            tabIndex={0}
            role="button"
            aria-label={`Live counter: ${formattedCups} cups. Tap the number for confetti and jokes.`}
            className="font-display font-bold text-[#FF3D7E] text-[2.15rem] min-[360px]:text-4xl min-[420px]:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-none tabular-nums counter-text-shadow cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-[#FF3D7E]/50 rounded-2xl px-2 active:scale-95 transition-transform"
          >
            {formattedCups}
          </motion.button>
        </div>

        {/* Easter Egg Joke Pop-up */}
        <AnimatePresence>
          {toastJoke && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              className="relative z-30 max-w-md mx-auto mt-2 mb-2 px-3"
            >
              <div className="bg-white border-2.5 border-[#221507] shadow-hard-roast rounded-2xl p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFF6E9] border-2 border-[#221507] flex-shrink-0 flex items-center justify-center text-lg shadow-hard-sm">
                  ☕
                </div>
                <p className="font-body text-xs sm:text-sm font-bold text-[#221507] text-left flex-1">
                  {toastJoke}
                </p>
                <button
                  onClick={() => setToastJoke(null)}
                  aria-label="close joke"
                  className="text-[#221507]/60 hover:text-[#221507] p-1 cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contextual sub-label */}
        <p className="font-body text-xs sm:text-base md:text-lg font-bold text-[#221507] mt-2 sm:mt-3 tracking-tight">
          cups of coffee consumed by humanity today
        </p>

        {/* Rotating Hero Equivalency Pill */}
        <div className="mt-4 sm:mt-5 max-w-xl mx-auto px-2">
          <div
            onMouseEnter={() => setShowAltJoke(true)}
            onMouseLeave={() => setShowAltJoke(false)}
            onClick={() => {
              setShowAltJoke(!showAltJoke);
              cafeAudio.playPop();
            }}
            className="group relative bg-white border-2.5 border-[#221507] shadow-hard-roast rounded-2xl sm:rounded-full p-2.5 sm:px-4 sm:py-2.5 flex items-center justify-between gap-2.5 sm:gap-3 transition-all cursor-pointer select-none hover:bg-amber-50/40"
          >
            {/* Left Icon indicator */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#38BDF8]/20 border-2 border-[#221507] flex items-center justify-center flex-shrink-0 text-lg sm:text-xl shadow-hard-sm">
              {currentEq.icon === 'pool' && '🏊'}
              {currentEq.icon === 'rocket' && '🚀'}
              {currentEq.icon === 'earth' && '🌍'}
              {currentEq.icon === 'eiffel' && '🗼'}
            </div>

            {/* Active copy or alt-joke with smooth animated crossfade */}
            <div className="flex-1 text-center font-body text-xs sm:text-sm text-[#221507] px-1 overflow-hidden min-h-[36px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!showAltJoke ? (
                  <motion.span
                    key={`label-${currentEq.id}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {eqData.prefix}
                    <strong className="font-bold text-[#221507] tabular-nums">
                      {eqData.value}
                    </strong>
                    {eqData.suffix}
                  </motion.span>
                ) : (
                  <motion.span
                    key={`joke-${currentEq.id}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#FF3D7E] font-bold italic"
                  >
                    "{currentEq.altJoke}"
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Manual cycle button with 'cycling' visual cue & step dots */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {/* 4-step cycling progress dots */}
              <div
                className="hidden min-[480px]:flex items-center gap-1 px-1.5 py-1 bg-[#FFF6E9] rounded-full border border-[#221507]/30"
                title={`Viewing equivalency ${eqIndex + 1} of ${HERO_EQUIVALENCIES.length}`}
              >
                {HERO_EQUIVALENCIES.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === eqIndex
                        ? 'w-3.5 bg-[#FF3D7E]'
                        : 'w-1.5 bg-[#221507]/30'
                    }`}
                  />
                ))}
              </div>

              {/* Cycling button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleManualCycle();
                }}
                title="Cycle to next equivalency"
                aria-label="Cycle to next equivalency"
                className="group/btn relative flex items-center gap-1.5 text-[11px] font-bold text-[#221507] bg-[#FFC94A] hover:bg-[#FFB82E] active:bg-[#FFA800] px-2.5 sm:px-3 py-1.5 rounded-full border-2 border-[#221507] transition-all flex-shrink-0 cursor-pointer shadow-hard-sm active:scale-95 overflow-hidden"
              >
                {/* Visual cycling rotation cue */}
                <RotateCw
                  className={`w-3.5 h-3.5 transition-transform duration-500 ease-out ${
                    isRotating
                      ? 'animate-spin'
                      : 'group-hover/btn:rotate-180'
                  }`}
                />
                <span className="hidden sm:inline">
                  Next ({eqIndex + 1}/{HERO_EQUIVALENCIES.length})
                </span>
                <span className="sm:hidden font-mono text-[10px]">
                  {eqIndex + 1}/{HERO_EQUIVALENCIES.length}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tap hint */}
        <button
          onClick={triggerEasterEgg}
          className="mt-2.5 text-xs sm:text-sm font-semibold text-[#221507]/80 hover:text-[#221507] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>👆</span>
          <span>Tap the number for confetti & coffee jokes!</span>
        </button>
      </div>

      {/* Illustrated Coffee Table Scene Vignette with Hidden Interactions */}
      <div className="mt-6 sm:mt-8 pt-2 relative max-w-4xl mx-auto">
        {/* Lamp Light Glow Effect when Lamp is turned ON */}
        <AnimatePresence>
          {lampOn && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute right-0 bottom-4 w-96 h-64 pointer-events-none z-0 rounded-full"
              style={{
                background:
                  'radial-gradient(ellipse at 85% 30%, rgba(255, 238, 140, 0.8) 0%, rgba(255, 201, 74, 0.4) 40%, transparent 70%)',
              }}
            />
          )}
        </AnimatePresence>

        {/* Floating Bubble Pop-up for Clicked Illustrations */}
        <AnimatePresence>
          {illustrationBubble && (
            <motion.div
              key={illustrationBubble.target}
              initial={{ opacity: 0, y: 10, scale: 0.88 }}
              animate={{ opacity: 1, y: -24, scale: 1 }}
              exit={{ opacity: 0, y: -36, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 450, damping: 24 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            >
              <div className="bg-[#221507] text-[#FFF6E9] px-3.5 py-1.5 rounded-full border-2 border-white shadow-hard-roast font-display font-bold text-xs sm:text-sm flex items-center gap-1.5 whitespace-nowrap">
                <span>✨</span>
                <span>{illustrationBubble.text}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Table Top Surface Area */}
        <div className="flex flex-row items-end justify-between gap-1 sm:gap-4 px-1 sm:px-4 relative z-10">
          {/* Bottom Left Desk Group */}
          <div className="flex items-end gap-1.5 sm:gap-3 flex-shrink-0">
            {/* Terracotta Plant with taped note (Interactive click!) */}
            <motion.div
              onClick={handlePlantClick}
              animate={plantWobble ? { rotate: [-8, 8, -4, 4, 0] } : {}}
              transition={{ duration: 0.45 }}
              title="Click the potted plant!"
              className="w-14 sm:w-20 h-22 sm:h-28 flex-shrink-0 cursor-pointer active:scale-95 transition-transform"
            >
              <DeskPottedPlant noteText="good coffee brighter days ♡" className="w-full h-full" />
            </motion.div>

            {/* Mug: 'Good Ideas Fuel Here!' with rising steam (Interactive click!) */}
            <motion.div
              onClick={handleMug1Click}
              animate={mug1Wobble ? { rotate: [-6, 6, -3, 3, 0], scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.4 }}
              title="Click the mug!"
              className="relative bg-white hover:bg-amber-50/50 border-2 sm:border-2.5 border-[#221507] shadow-hard rounded-2xl p-2 sm:p-2.5 max-w-[105px] sm:max-w-[130px] text-center mb-1 cursor-pointer select-none active:scale-95 transition-all"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 pointer-events-none">
                <SteamWisp className="w-3.5 h-6" variant={1} />
              </div>
              <p className="font-display font-bold text-[10px] sm:text-xs leading-tight text-[#221507]">
                Good Ideas Fuel Here!
              </p>
              {/* Mug handle */}
              <div className="absolute -left-2.5 top-2.5 w-3 h-6 border-2 border-r-0 border-[#221507] rounded-l-md bg-white -z-10" />
            </motion.div>

            {/* Taped sticky note on desk: 'Same chaos more coffee :)' */}
            <div className="hidden md:block relative bg-[#FFFEF0] border-1.5 border-[#221507] shadow-hard-sm rounded p-1.5 -rotate-3 transform max-w-[95px] text-center mb-1">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-[#FFF6E9]/80 border border-[#221507]/30 rotate-1" />
              <p className="font-display font-bold text-[9px] text-[#221507] leading-tight">
                Same chaos more coffee 🙂
              </p>
            </div>

            {/* Desk pencil + scattered beans (Interactive!) */}
            <div className="hidden lg:flex flex-col gap-1 pb-1">
              <motion.div
                onClick={handlePencilClick}
                animate={pencilBounce ? { x: [-3, 3, -2, 2, 0] } : {}}
                transition={{ duration: 0.35 }}
                title="Click pencil"
                className="cursor-pointer active:scale-95"
              >
                <DeskPencil className="w-16 h-3" />
              </motion.div>
              <div className="flex items-center gap-1.5">
                <motion.div
                  onClick={() => handleBeanClick(1)}
                  animate={beanSpinId === 1 ? { rotate: [0, 360], scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.4 }}
                  title="Click bean"
                  className="cursor-pointer p-0.5"
                >
                  <CoffeeBean className="w-4 h-4 rotate-12 transform hover:scale-125 transition-transform" />
                </motion.div>
                <motion.div
                  onClick={() => handleBeanClick(2)}
                  animate={beanSpinId === 2 ? { rotate: [0, -360], scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.4 }}
                  title="Click bean"
                  className="cursor-pointer p-0.5"
                >
                  <CoffeeBean className="w-3.5 h-3.5 -rotate-45 transform hover:scale-125 transition-transform" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Right Desk Group */}
          <div className="flex items-end gap-1.5 sm:gap-3 flex-shrink-0">
            {/* Note: 'A Brighter Day Needs A Darker Coffee' */}
            <div className="relative bg-[#FFC94A] border-1.5 sm:border-2 border-[#221507] shadow-hard-sm rounded-lg p-1.5 sm:p-2 max-w-[90px] sm:max-w-[120px] rotate-2 transform text-center hidden xs:block mb-1">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-white/70 border border-[#221507]/40 -rotate-2" />
              <p className="font-display font-bold text-[9px] sm:text-[11px] leading-tight text-[#221507]">
                A Brighter Day Needs A Darker Coffee
              </p>
            </div>

            {/* Books Stack + Sleeping Cats (Interactive click!) */}
            <motion.div
              onClick={handleCatClick}
              animate={catWobble ? { y: [-3, 3, -1, 1, 0], scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.4 }}
              title="Click the sleeping barista cat!"
              className="w-22 sm:w-28 md:w-32 h-20 sm:h-24 flex-shrink-0 cursor-pointer select-none active:scale-95 transition-transform"
            >
              <SleepingCatsOnBooks className="w-full h-full" />
            </motion.div>

            {/* Mug: 'More Coffee Please' (Interactive click!) */}
            <motion.div
              onClick={handleMug2Click}
              animate={mug2Wobble ? { rotate: [-6, 6, -3, 3, 0], scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.4 }}
              title="Click the mug!"
              className="relative bg-white hover:bg-amber-50/50 border-2 sm:border-2.5 border-[#221507] shadow-hard rounded-2xl p-1.5 sm:p-2 max-w-[85px] sm:max-w-[105px] text-center mb-1 cursor-pointer select-none active:scale-95 transition-all"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none">
                <SteamWisp className="w-3 h-5" variant={2} />
              </div>
              <p className="font-display font-bold text-[9px] sm:text-[11px] leading-tight text-[#221507]">
                More Coffee Please
              </p>
              {/* Mug handle */}
              <div className="absolute -right-2.5 top-2 w-3 h-5 border-2 border-l-0 border-[#221507] rounded-r-md bg-white -z-10" />
            </motion.div>

            {/* Architect Desk Lamp on Right (Interactive click to turn ON/OFF!) */}
            <motion.div
              onClick={handleLampClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Click to toggle desk lamp!"
              className="hidden sm:block w-16 sm:w-22 h-24 sm:h-30 flex-shrink-0 -mb-1 cursor-pointer"
            >
              <DeskLampIllustration className="w-full h-full" />
            </motion.div>
          </div>
        </div>

        {/* Wooden tabletop plank edge */}
        <div className="w-full h-2 bg-[#4A2C1D] rounded-full border-t border-[#221507] mt-1 relative">
          <div className="absolute inset-x-4 top-0.5 h-[1px] bg-[#6F4E37] opacity-60" />
        </div>
      </div>
    </section>
  );
}

