import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { CoffeeCupIcon } from './Illustrations';
import { cafeAudio } from '../lib/cafeAudio';

interface NavbarProps {
  isMuted: boolean;
  onToggleSound: () => void;
  onScrollToRealityCheck?: () => void;
}

export function Navbar({ isMuted, onToggleSound, onScrollToRealityCheck }: NavbarProps) {
  const [cupWobble, setCupWobble] = useState(false);

  const handleCupClick = () => {
    cafeAudio.playPop();
    setCupWobble(true);
    setTimeout(() => setCupWobble(false), 400);
  };

  return (
    <header className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-5 pb-3 flex items-center justify-between">
      {/* Brand logo & cup */}
      <div
        onClick={handleCupClick}
        className="flex items-center gap-2.5 select-none cursor-pointer group"
        title="The Coffee Calculator"
      >
        <motion.div
          animate={cupWobble ? { rotate: [-10, 10, -5, 5, 0] } : {}}
          transition={{ duration: 0.35 }}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#FFC94A] border-2 border-[#221507] shadow-hard-sm flex items-center justify-center p-1 flex-shrink-0 group-hover:bg-[#FFB82E] transition-colors"
        >
          <CoffeeCupIcon className="w-7 h-7" />
        </motion.div>
        <div className="leading-tight font-display font-bold text-lg sm:text-xl text-[#221507] tracking-tight">
          <span>The</span>
          <span className="ml-1 text-[#221507]">Coffee Calculator</span>
        </div>
      </div>

      {/* Right cluster: Honesty badge & Sound toggle */}
      <div className="flex items-center gap-2.5 sm:gap-4">
        {/* Honesty note */}
        <button
          onClick={() => {
            cafeAudio.playPop();
            onScrollToRealityCheck?.();
          }}
          title="Jump to reality check"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#221507]/20 text-xs font-body text-[#221507] hover:bg-white hover:border-[#221507]/50 shadow-hard-sm transition cursor-pointer active:scale-95"
        >
          <span>A deeply unserious estimate</span>
          <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#221507] text-[#FFF6E9] text-[10px] font-bold">
            i
          </span>
        </button>

        {/* Sound toggle button */}
        <button
          onClick={() => {
            cafeAudio.playPop();
            onToggleSound();
          }}
          aria-label={isMuted ? 'unmute background sound' : 'mute background sound'}
          className={`px-3.5 py-1.5 rounded-full border-2 border-[#221507] shadow-hard-sm font-body font-medium text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer active:scale-95 ${
            !isMuted
              ? 'bg-[#FFC94A] text-[#221507] ring-2 ring-[#FFC94A]/40'
              : 'bg-white text-[#221507] hover:bg-amber-50'
          }`}
        >
          {!isMuted ? (
            <>
              <Volume2 className="w-4 h-4 text-[#221507] animate-pulse" />
              <span className="font-semibold">Sound on</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#221507]/60" />
              <span>Sound off</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
