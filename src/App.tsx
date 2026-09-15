import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TornPaperDivider } from './components/Illustrations';
import { InOtherWordsSection } from './components/InOtherWordsSection';
import { QuickRealityCheckSection } from './components/QuickRealityCheckSection';
import { ClosingAndFooterSection } from './components/ClosingAndFooterSection';
import { getCupsToday } from './lib/coffeeMath';
import { cafeAudio } from './lib/cafeAudio';

export default function App() {
  const [cupsToday, setCupsToday] = useState<number>(() => getCupsToday());
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Live ticking counter recomputed continuously from wall-clock UTC time
  useEffect(() => {
    const interval = setInterval(() => {
      setCupsToday(getCupsToday());
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = async () => {
    if (isMuted) {
      const started = await cafeAudio.start();
      if (started) {
        setIsMuted(false);
      }
    } else {
      cafeAudio.suspend();
      setIsMuted(true);
    }
  };

  const scrollToRealityCheck = () => {
    const elem = document.getElementById('reality-check-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF6E9] text-[#221507] flex flex-col selection:bg-[#FF3D7E] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
        onScrollToRealityCheck={scrollToRealityCheck}
      />

      {/* 2. Top / Hero Live Counter & Coffee Table Scene */}
      <main className="flex-1 w-full">
        <HeroSection cupsToday={cupsToday} />

        {/* 3. Scalloped Torn Paper Transition */}
        <TornPaperDivider className="mt-4" />

        {/* 4. "In other words..." 4 Illustrated Equivalency Cards */}
        <div className="bg-white/40">
          <InOtherWordsSection cupsToday={cupsToday} />
        </div>

        {/* 5. "A quick reality check" Inline Illustrated Section */}
        <div className="border-t-2 border-dashed border-[#221507]/15">
          <QuickRealityCheckSection />
        </div>

        {/* 6. Closing Message, Illustrations, and Footer */}
        <div className="border-t-2 border-[#221507]/20 bg-[#FFF3E3]/60">
          <ClosingAndFooterSection />
        </div>
      </main>
    </div>
  );
}
