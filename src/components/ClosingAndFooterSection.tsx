import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CoffeeCupIcon,
  BurlapSackIllustration,
  ChemexIllustration,
  CoffeeBean,
  TopDownCoffeeCup,
  SteamWisp,
} from './Illustrations';
import { cafeAudio } from '../lib/cafeAudio';

export function ClosingAndFooterSection() {
  const [copiedToast, setCopiedToast] = useState(false);
  const [coffeeLoveToast, setCoffeeLoveToast] = useState(false);
  const [footerToast, setFooterToast] = useState<string | null>(null);

  const showFooterToast = (msg: string) => {
    setFooterToast(msg);
    setTimeout(() => setFooterToast(null), 3000);
  };

  const handleBurlapClick = () => {
    cafeAudio.playPop();
    showFooterToast('100% Arabica fresh roast harvest! 🌾📦');
  };

  const handleChemexClick = () => {
    cafeAudio.playDrip();
    showFooterToast('Slow-drip pour over meditation... 💧☕');
  };

  const handleLatteClick = () => {
    cafeAudio.playPop();
    showFooterToast('Barista latte art heart unlocked! ♥☕');
  };

  const handleFooterMugClick = () => {
    cafeAudio.playDing();
    showFooterToast('Chaos managed. Coffee secured. 🫡☕');
  };

  const handleShare = async () => {
    cafeAudio.playPop();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'The Coffee Calculator',
          text: 'Check out how many cups of coffee humanity has consumed today!',
          url: window.location.href,
        });
        return;
      } catch {
        // fall back to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    } catch {
      // safe ignore
    }
  };

  const handleBuyCoffee = () => {
    cafeAudio.playDing();
    setCoffeeLoveToast(true);
    setTimeout(() => setCoffeeLoveToast(false), 3000);
  };

  return (
    <div className="w-full select-none relative">
      {/* Floating footer interaction toast */}
      <AnimatePresence>
        {footerToast && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-[#221507] text-[#FFF6E9] px-4 py-2 rounded-full border-2 border-white shadow-hard-roast font-display font-bold text-xs sm:text-sm flex items-center gap-2">
              <span>☕</span>
              <span>{footerToast}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Closing Coffee Environment Section (Matches Image 1 Reference) */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {/* Left Element: Burlap Sack 'COFFEE MAKES A NICER INTERNET' */}
          <div className="flex-shrink-0 order-2 md:order-1 flex items-end gap-3">
            <motion.div
              onClick={handleBurlapClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Click the coffee sack!"
              className="cursor-pointer"
            >
              <BurlapSackIllustration className="w-28 sm:w-36 h-36 sm:h-44" />
            </motion.div>
            <motion.div
              onClick={handleLatteClick}
              whileHover={{ scale: 1.15, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              title="Click the latte cup!"
              className="hidden sm:block w-16 h-16 mb-2 cursor-pointer"
            >
              <TopDownCoffeeCup className="w-full h-full" />
            </motion.div>
          </div>

          {/* Center Text Block */}
          <div className="flex-1 max-w-lg text-center order-1 md:order-2 px-2">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#221507] tracking-tight mb-2">
              Still scrolling? Have a coffee. ☕
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#221507]/80 leading-relaxed max-w-md mx-auto">
              The world runs on coffee, curiosity and slightly delusional people.
              <br />
              You're in good company.
            </p>

            {/* Pink heart divider */}
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="w-12 h-0.5 bg-[#221507]/20 rounded-full" />
              <span className="text-[#FF3D7E] text-base animate-pulse">♥</span>
              <span className="w-12 h-0.5 bg-[#221507]/20 rounded-full" />
            </div>

            {/* Featured Quote */}
            <blockquote className="font-body italic text-sm sm:text-base text-[#221507] font-semibold">
              “Good coffee. Slightly better humans.”
            </blockquote>
            <span className="font-body text-xs text-[#221507]/70 block mt-1">
              — The Coffee Calculator
            </span>
          </div>

          {/* Right Element: Chemex + 'Same Chaos Different Caffeine' Mug */}
          <div className="flex items-end gap-2 sm:gap-3 flex-shrink-0 order-3">
            {/* Chemex Glass Carafe */}
            <motion.div
              onClick={handleChemexClick}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              title="Click the Chemex carafe!"
              className="w-20 sm:w-24 h-32 sm:h-38 cursor-pointer"
            >
              <ChemexIllustration className="w-full h-full" />
            </motion.div>

            {/* Mug: Same Chaos Different Caffeine */}
            <motion.div
              onClick={handleFooterMugClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Click the mug!"
              className="relative mb-2 cursor-pointer"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none">
                <SteamWisp className="w-3 h-5" variant={1} />
              </div>
              <div className="bg-white hover:bg-amber-50/60 border-2 border-[#221507] shadow-hard-sm rounded-xl p-2 max-w-[95px] sm:max-w-[110px] text-center transition-colors">
                <p className="font-display font-bold text-[9px] sm:text-[10px] leading-tight text-[#221507]">
                  Same Chaos
                  <br />
                  Different
                  <br />
                  Caffeine
                </p>
                {/* Mug Handle */}
                <div className="absolute -right-3 top-2 w-3.5 h-8 border-2 border-l-0 border-[#221507] rounded-r-md bg-white -z-10" />
              </div>

              {/* Scattered beans */}
              <div className="flex items-center justify-center gap-1 mt-1">
                <CoffeeBean className="w-4 h-4 rotate-45 transform" />
                <CoffeeBean className="w-3.5 h-3.5 -rotate-30 transform" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Persistent Bottom Footer Bar (Matches Image 1 Reference) */}
      <footer className="w-full border-t-2 border-[#221507] bg-white py-6 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          {/* Brand Left */}
          <div className="flex items-center gap-2">
            <CoffeeCupIcon className="w-6 h-6" />
            <span className="font-display font-bold text-sm text-[#221507]">
              The Coffee Calculator
            </span>
          </div>

          {/* Links Center */}
          <div className="font-body text-xs text-[#221507]/80 flex flex-wrap items-center justify-center gap-2">
            <span>Made with ☕ and the internet</span>
            <span className="text-[#221507]/30">|</span>
            <span>Totally unofficial</span>
            <span className="text-[#221507]/30">|</span>
            <button
              onClick={handleShare}
              className="hover:text-[#FF3D7E] underline cursor-pointer font-medium"
            >
              Share this page
            </button>
            <span className="text-[#221507]/30">|</span>
            <button
              onClick={handleBuyCoffee}
              className="hover:text-[#FF3D7E] underline cursor-pointer font-medium"
            >
              Buy me a coffee? <span className="text-[#FF3D7E]">♥</span>
            </button>
          </div>

          {/* Note Right */}
          <div className="font-display font-bold text-xs text-[#221507]/80 italic">
            Keep Caffeinating &lt;3
          </div>
        </div>

        {/* Share toast confirmation */}
        {copiedToast && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#221507] text-[#FFF6E9] px-4 py-2 rounded-full text-xs font-bold shadow-hard-lg z-50 animate-bounce">
            Link copied! Share the caffeine love ☕
          </div>
        )}

        {/* Coffee love toast confirmation */}
        {coffeeLoveToast && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#FF3D7E] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-hard-lg z-50 flex items-center gap-2">
            <span>☕</span>
            <span>You rock! Virtual espresso shot poured with extra love!</span>
          </div>
        )}
      </footer>
    </div>
  );
}
