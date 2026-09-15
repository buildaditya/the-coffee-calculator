import React from 'react';

export function CoffeeBean({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`inline-block ${className}`}
      style={style}
    >
      <path
        d="M6.5 4.5C3 8 3 16 7.5 19.5C12 23 19 21.5 20.5 16C22 10.5 17 4 12 3C9.5 2.5 7.8 3.2 6.5 4.5Z"
        fill="#4A2C1D"
        stroke="#221507"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 6C8.5 9 12 10 14 14C15.5 17 18 17.5 19.5 17"
        stroke="#FFF6E9"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SteamWisp({
  className = '',
  style = {},
  variant = 1,
}: {
  className?: string;
  style?: React.CSSProperties;
  variant?: 1 | 2;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 42"
      fill="none"
      className={`inline-block ${variant === 1 ? 'animate-steam-1' : 'animate-steam-2'} ${className}`}
      style={style}
    >
      <path
        d={
          variant === 1
            ? 'M10 38C16 30 4 22 13 14C19 8 9 3 11 2'
            : 'M10 38C4 31 16 23 7 15C2 9 11 4 9 2'
        }
        stroke="#4A2C1D"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="2 3"
        opacity="0.5"
      />
    </svg>
  );
}

export function SparkleStar({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="#FFC94A"
      stroke="#221507"
      strokeWidth="1.5"
      className={`inline-block animate-twinkle ${className}`}
      style={style}
    >
      <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
    </svg>
  );
}

export function CoffeeCupIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      {/* Cup body */}
      <path
        d="M5 9H23V19C23 23.4 19.4 27 15 27H13C8.6 27 5 23.4 5 19V9Z"
        fill="#FFF6E9"
        stroke="#221507"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Coffee liquid surface */}
      <ellipse cx="14" cy="9" rx="8.5" ry="3" fill="#4A2C1D" stroke="#221507" strokeWidth="1.5" />
      {/* Handle */}
      <path
        d="M23 12C25.5 12 27.5 13.8 27.5 16C27.5 18.2 25.5 20 23 20"
        stroke="#221507"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Cute face */}
      <circle cx="11" cy="17" r="1" fill="#221507" />
      <circle cx="17" cy="17" r="1" fill="#221507" />
      <path d="M13 19C13.5 20 14.5 20 15 19" stroke="#221507" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Potted Desk Plant with Monstera/Ficus foliage and taped note
 */
export function DeskPottedPlant({
  className = '',
  noteText,
}: {
  className?: string;
  noteText?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 90 120" className="w-full h-full" fill="none" aria-hidden="true">
        {/* Plant Leaves */}
        <g stroke="#221507" strokeWidth="2.2" strokeLinejoin="round">
          {/* Back Leaves */}
          <path d="M45 65 C20 40 10 20 30 10 C48 2 55 25 45 65 Z" fill="#00A892" />
          <path d="M45 65 C65 42 80 25 78 40 C76 56 56 60 45 65 Z" fill="#00A892" />
          {/* Main Front Leaves */}
          <path d="M45 70 C18 55 12 66 20 80 C28 92 40 78 45 70 Z" fill="#00C2A8" />
          <path d="M45 68 C35 30 50 15 62 22 C72 32 58 55 45 68 Z" fill="#00C2A8" />
          <path d="M45 70 C58 52 75 48 76 62 C77 75 58 75 45 70 Z" fill="#00C2A8" />
          {/* Leaf rib details */}
          <path d="M45 65 Q35 38 32 18" stroke="#221507" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
          <path d="M45 68 Q54 44 58 28" stroke="#221507" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
        </g>
        {/* Terracotta Pot */}
        <g stroke="#221507" strokeWidth="2.6" strokeLinejoin="round">
          <polygon points="22,72 68,72 61,114 29,114" fill="#E07A5F" />
          <rect x="18" y="66" width="54" height="10" rx="3" fill="#E07A5F" />
          {/* Soil line */}
          <ellipse cx="45" cy="68" rx="23" ry="4" fill="#4A2C1D" />
          {/* Pot highlight stripe */}
          <path d="M26 80 L32 108" stroke="#F4A261" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>

      {/* Taped Sticky Note on Pot */}
      {noteText && (
        <div className="absolute top-1/2 -left-3 sm:-left-6 bg-[#FFFEF0] border-1.5 border-[#221507] shadow-hard-sm rounded p-1.5 -rotate-6 transform max-w-[90px] sm:max-w-[105px] text-center z-10">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-[#FFF6E9]/80 border border-[#221507]/30 rotate-2" />
          <p className="font-display font-bold text-[9px] sm:text-[10px] text-[#221507] leading-tight">
            {noteText}
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Architect Desk Lamp with warm glow cone
 */
export function DeskLampIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Warm Ambient Light Cone */}
      <div
        aria-hidden="true"
        className="absolute -top-4 -left-16 sm:-left-24 w-40 sm:w-56 h-60 sm:h-72 pointer-events-none -z-10 animate-lamp-warmth"
        style={{
          background:
            'radial-gradient(ellipse at 75% 25%, rgba(255, 201, 74, 0.45) 0%, rgba(255, 201, 74, 0.15) 50%, transparent 80%)',
          transform: 'rotate(-20deg)',
        }}
      />

      <svg viewBox="0 0 120 140" fill="none" className="w-full h-full" aria-hidden="true">
        {/* Heavy Table Base */}
        <ellipse cx="85" cy="128" rx="20" ry="6" fill="#221507" />
        <ellipse cx="85" cy="124" rx="18" ry="5" fill="#4A2C1D" stroke="#221507" strokeWidth="2" />

        {/* Lower Arm Bar */}
        <line x1="85" y1="124" x2="68" y2="72" stroke="#221507" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="88" y1="124" x2="71" y2="72" stroke="#4A2C1D" strokeWidth="2.5" strokeLinecap="round" />

        {/* Elbow Joint Bolt */}
        <circle cx="68" cy="72" r="5" fill="#FFC94A" stroke="#221507" strokeWidth="2" />

        {/* Upper Arm Bar */}
        <line x1="68" y1="72" x2="36" y2="46" stroke="#221507" strokeWidth="4" strokeLinecap="round" />

        {/* Head Swivel Joint */}
        <circle cx="36" cy="46" r="4.5" fill="#FFC94A" stroke="#221507" strokeWidth="2" />

        {/* Lamp Shade Cap */}
        <path d="M36 46 L24 38 L30 30 L42 38 Z" fill="#221507" />

        {/* Metallic Dome Shade */}
        <path
          d="M20 34 C16 42 22 62 44 56 C48 54 44 38 34 32 Z"
          fill="#334155"
          stroke="#221507"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Glowing bulb interior */}
        <path
          d="M24 50 Q32 60 42 54"
          fill="#FFC94A"
          stroke="#FFC94A"
          strokeWidth="3"
        />
        <circle cx="34" cy="54" r="5" fill="#FFF6E9" />

        {/* Lamp Switch detail */}
        <line x1="85" y1="120" x2="96" y2="128" stroke="#221507" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * Two Sleeping Cats curled up together on a stack of books with gentle breathing
 */
export function SleepingCatsOnBooks({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 130 95" className="w-full h-full" fill="none" aria-hidden="true">
        {/* Bottom Book: "Build • Repeat" */}
        <g stroke="#221507" strokeWidth="2.5" strokeLinejoin="round">
          <rect x="10" y="70" width="112" height="18" rx="3" fill="#4A2C1D" />
          <rect x="14" y="73" width="102" height="12" fill="#FFF6E9" strokeWidth="1.5" />
          <line x1="12" y1="79" x2="116" y2="79" stroke="#4A2C1D" strokeWidth="1.2" strokeDasharray="3 2" />
        </g>
        <text
          x="65"
          y="82"
          textAnchor="middle"
          fill="#4A2C1D"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="bold"
          fontSize="7.5"
          letterSpacing="0.8"
        >
          BUILD • REPEAT
        </text>

        {/* Top Book: "Build • Caffeine" */}
        <g stroke="#221507" strokeWidth="2.5" strokeLinejoin="round">
          <rect x="18" y="52" width="100" height="18" rx="3" fill="#00C2A8" />
          <rect x="22" y="55" width="90" height="12" fill="#FFF6E9" strokeWidth="1.5" />
          <line x1="20" y1="61" x2="112" y2="61" stroke="#00C2A8" strokeWidth="1.2" strokeDasharray="3 2" />
        </g>
        <text
          x="67"
          y="64"
          textAnchor="middle"
          fill="#007B6B"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="bold"
          fontSize="7.5"
          letterSpacing="0.8"
        >
          BUILD • CAFFEINE
        </text>

        {/* Two Cats Nestled Snug Together with Breathing Motion */}
        <g className="animate-breathe">
          {/* Ginger / Orange Cat on Left */}
          {/* Body */}
          <ellipse cx="48" cy="40" rx="20" ry="14" fill="#F4A261" stroke="#221507" strokeWidth="2.2" />
          {/* Tabby stripes */}
          <path d="M40 32 Q44 38 48 34" stroke="#E76F51" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M50 32 Q54 38 58 34" stroke="#E76F51" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          {/* Head */}
          <circle cx="38" cy="38" r="11" fill="#F4A261" stroke="#221507" strokeWidth="2.2" />
          {/* Ears */}
          <polygon points="31,31 34,22 40,29" fill="#F4A261" stroke="#221507" strokeWidth="2" />
          <polygon points="39,29 44,22 47,30" fill="#F4A261" stroke="#221507" strokeWidth="2" />
          {/* Inner ears */}
          <polygon points="33,29 35,24 38,28" fill="#FFCCD5" />
          {/* Sleeping eyes */}
          <path d="M33 38 Q36 41 39 38" stroke="#221507" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <polygon points="37,42 39,42 38,44" fill="#E76F51" />
          {/* Curled paws */}
          <ellipse cx="44" cy="48" rx="4" ry="2.5" fill="#FFF6E9" stroke="#221507" strokeWidth="1.5" />

          {/* Brown / Mocha Cat on Right, Snuggled Against */}
          {/* Body */}
          <ellipse cx="80" cy="40" rx="22" ry="15" fill="#8D6E63" stroke="#221507" strokeWidth="2.2" />
          {/* Head */}
          <circle cx="70" cy="38" r="11" fill="#8D6E63" stroke="#221507" strokeWidth="2.2" />
          {/* Ears */}
          <polygon points="64,30 67,21 73,28" fill="#8D6E63" stroke="#221507" strokeWidth="2" />
          <polygon points="72,28 77,21 80,29" fill="#8D6E63" stroke="#221507" strokeWidth="2" />
          {/* Inner ears */}
          <polygon points="66,28 68,23 71,27" fill="#D7CCC8" />
          {/* Sleeping eyes */}
          <path d="M66 38 Q69 41 72 38" stroke="#221507" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <polygon points="70,42 72,42 71,44" fill="#4E342E" />
          {/* Curled Tail wrapping around */}
          <path
            d="M98 42 C106 44 106 54 94 54 C88 54 84 52 82 50"
            stroke="#8D6E63"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M98 42 C106 44 106 54 94 54 C88 54 84 52 82 50"
            stroke="#221507"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * Top-Down Ceramic Coffee Cup with Crema and Scattered Beans
 */
export function TopDownCoffeeCup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" aria-hidden="true">
        {/* Saucer */}
        <circle cx="50" cy="50" r="46" fill="#FFFDF8" stroke="#221507" strokeWidth="2.8" />
        <circle cx="50" cy="50" r="38" stroke="#221507" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
        {/* Cup Rim */}
        <circle cx="50" cy="50" r="34" fill="#FFFFFF" stroke="#221507" strokeWidth="3" />
        {/* Dark Espresso Pool */}
        <circle cx="50" cy="50" r="28" fill="#3B2012" stroke="#221507" strokeWidth="1.8" />
        {/* Crema Swirls */}
        <path
          d="M36 44 C42 36 58 38 64 46 C68 52 60 62 48 60 C40 58 34 50 36 44 Z"
          fill="#C48B4B"
          opacity="0.85"
        />
        <circle cx="48" cy="48" r="7" fill="#9C6634" opacity="0.9" />
        <ellipse cx="46" cy="46" rx="4" ry="2.5" fill="#E2B170" />
        {/* Handle */}
        <path
          d="M84 42 C92 44 94 56 84 58"
          stroke="#221507"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Scattered Coffee Beans around cup */}
      <div className="absolute -bottom-2 -left-2">
        <CoffeeBean className="w-4 h-4 rotate-45 transform" />
      </div>
      <div className="absolute -top-1 -right-2">
        <CoffeeBean className="w-3.5 h-3.5 -rotate-20 transform" />
      </div>
    </div>
  );
}

/**
 * Artist Drafting Pencil lying on the wooden desk
 */
export function DeskPencil({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 16" fill="none" className={className} aria-hidden="true">
      {/* Wood Barrel */}
      <polygon points="18,3 90,3 90,13 18,13" fill="#FFC94A" stroke="#221507" strokeWidth="1.8" />
      {/* Stripe on Barrel */}
      <line x1="18" y1="8" x2="90" y2="8" stroke="#221507" strokeWidth="1" strokeDasharray="3 1" />
      {/* Sharpened Wood Tip */}
      <polygon points="18,3 4,8 18,13" fill="#FFF6E9" stroke="#221507" strokeWidth="1.8" />
      {/* Graphite Lead Tip */}
      <polygon points="10,6 4,8 10,10" fill="#221507" />
      {/* Metal Ferrule */}
      <rect x="90" y="3" width="5" height="10" fill="#CBD5E1" stroke="#221507" strokeWidth="1.8" />
      {/* Pink Eraser */}
      <path d="M95 3 H98 C100 3 100 13 98 13 H95 Z" fill="#FF3D7E" stroke="#221507" strokeWidth="1.8" />
    </svg>
  );
}

/**
 * Snowy Mountain Peaks for Mount Everest Card (In other words...)
 */
export function MountEverestIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" fill="none" className={className} aria-hidden="true">
      {/* Back Mountain */}
      <polygon points="15,70 45,22 68,70" fill="#E2E8F0" stroke="#221507" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="45,22 53,35 48,42 45,38 38,45 35,36" fill="#FFFFFF" stroke="#221507" strokeWidth="1.8" />
      {/* Main Front Mountain */}
      <polygon points="30,70 65,12 95,70" fill="#CBD5E1" stroke="#221507" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Snow Cap with ice blue shading */}
      <path d="M65,12 L82,45 L73,42 L65,48 L58,40 L50,47 L46,38 Z" fill="#FFFFFF" stroke="#221507" strokeWidth="2" strokeLinejoin="round" />
      <path d="M65,12 L82,45 L73,42 L65,48 Z" fill="#E0F2FE" />
      {/* Little Left Peak */}
      <polygon points="5,70 24,38 42,70" fill="#94A3B8" stroke="#221507" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="24,38 33,52 28,50 24,54 20,48" fill="#FFFFFF" stroke="#221507" strokeWidth="1.8" />
      {/* Peak ridge lines */}
      <path d="M65,12 L63,70" stroke="#221507" strokeWidth="1.8" strokeDasharray="3 2" />
      <path d="M24,38 L25,70" stroke="#221507" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Tiny Stack of Coffee Cups on the left! */}
      <g stroke="#221507" strokeWidth="1.2">
        <rect x="8" y="58" width="6" height="4" rx="1" fill="#FFF6E9" />
        <rect x="8" y="53" width="6" height="4" rx="1" fill="#FFF6E9" />
        <rect x="8" y="48" width="6" height="4" rx="1" fill="#FFF6E9" />
        <rect x="8" y="43" width="6" height="4" rx="1" fill="#FFC94A" />
      </g>
    </svg>
  );
}

/**
 * Cratered Moon Illustration with Orbiting Retro Rocket for Trips to Moon Card
 */
export function MoonIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 95 90" fill="none" className="w-full h-full" aria-hidden="true">
        {/* Moon Globe */}
        <circle cx="45" cy="48" r="32" fill="#F4E9CD" stroke="#221507" strokeWidth="2.5" />
        {/* Shading crescent */}
        <path d="M45,16 A32,32 0 0,1 77,48 A32,32 0 0,1 45,80 A32,26 0 0,0 45,16 Z" fill="#EAD8A7" opacity="0.6" />
        {/* Craters */}
        <circle cx="34" cy="35" r="5.5" fill="#D9C38B" stroke="#221507" strokeWidth="1.8" />
        <circle cx="53" cy="32" r="4.2" fill="#D9C38B" stroke="#221507" strokeWidth="1.8" />
        <circle cx="39" cy="57" r="7.5" fill="#D9C38B" stroke="#221507" strokeWidth="2" />
        <circle cx="61" cy="54" r="4.5" fill="#D9C38B" stroke="#221507" strokeWidth="1.8" />
        <circle cx="26" cy="50" r="3" fill="#D9C38B" stroke="#221507" strokeWidth="1.4" />
        {/* Crater inner shadows */}
        <path d="M34,31 A4,4 0 0,1 38,35" stroke="#221507" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M39,51 A6,6 0 0,1 45,57" stroke="#221507" strokeWidth="1.4" strokeLinecap="round" />

        {/* Orbit Flight Trail */}
        <path d="M12 70 C16 45 40 18 78 22" stroke="#221507" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

        {/* Retro Rocket Ship Zooming Past */}
        <g transform="translate(68, 12) rotate(35)">
          {/* Exhaust Flame */}
          <polygon points="5,22 10,29 15,22" fill="#FFC94A" stroke="#221507" strokeWidth="1.2" />
          <polygon points="7,22 10,26 13,22" fill="#FF3D7E" />
          {/* Rocket Body */}
          <path d="M4 22 C4 14 10 4 10 4 C10 4 16 14 16 22 Z" fill="#FFFFFF" stroke="#221507" strokeWidth="1.8" />
          {/* Red Nose Cone */}
          <path d="M7 10 C7 6 10 4 10 4 C10 4 13 6 13 10 Z" fill="#FF3D7E" />
          {/* Porthole Window */}
          <circle cx="10" cy="14" r="2.5" fill="#38BDF8" stroke="#221507" strokeWidth="1.2" />
          {/* Fins */}
          <polygon points="4,18 0,22 4,22" fill="#FF3D7E" stroke="#221507" strokeWidth="1.2" />
          <polygon points="16,18 20,22 16,22" fill="#FF3D7E" stroke="#221507" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Cute African Elephant Illustration for Weight Card
 */
export function ElephantIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 95 80" fill="none" className={className} aria-hidden="true">
      {/* Elephant Body */}
      <path
        d="M20,62 L20,44 C20,25 35,14 58,14 C76,14 88,26 88,42 L88,62 L78,62 L78,48 C78,46 75,46 75,48 L75,62 L63,62 L63,48 C63,46 60,46 60,48 L60,62 L48,62 L48,48 C48,46 45,46 45,48 L45,62 L33,62 L33,48 C33,46 30,46 30,48 L30,62 Z"
        fill="#B8A89A"
        stroke="#221507"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Head & Trunk */}
      <path
        d="M32,24 C24,24 16,30 16,40 C16,48 20,54 22,60 C23,63 21,66 18,65 C14,64 12,58 12,50 C12,38 18,20 36,18"
        fill="#B8A89A"
        stroke="#221507"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Floppy Ear */}
      <path
        d="M34,18 C28,18 24,24 24,34 C24,46 32,52 38,50 C44,48 44,36 44,28 C44,20 40,18 34,18 Z"
        fill="#C9BDB0"
        stroke="#221507"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Wrinkles on Ear */}
      <path d="M30 26 Q34 32 32 40" stroke="#8A7B6E" strokeWidth="1.2" fill="none" />
      {/* Eye */}
      <circle cx="28" cy="28" r="1.5" fill="#221507" />
      {/* Small Tusk */}
      <path d="M22,46 C24,50 30,52 32,50" stroke="#FFF6E9" strokeWidth="3" strokeLinecap="round" />
      <path d="M22,46 C24,50 30,52 32,50" stroke="#221507" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Tail */}
      <path d="M88,40 C92,42 94,50 93,56" stroke="#221507" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Stylized Earth Globe with Orbit of Coffee Beans for Oceans Card & Hero Pill
 */
export function EarthGlobeIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 90 90" fill="none" className="w-full h-full" aria-hidden="true">
        {/* Orbital ring */}
        <ellipse cx="45" cy="45" rx="42" ry="18" stroke="#221507" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" transform="rotate(-15 45 45)" />

        {/* Blue Ocean */}
        <circle cx="45" cy="45" r="30" fill="#38BDF8" stroke="#221507" strokeWidth="2.5" />
        {/* Green Continents */}
        <path
          d="M32,28 C38,30 43,27 48,31 C54,35 50,42 45,43 C39,45 34,40 30,36 C27,33 28,26 32,28 Z"
          fill="#4ADE80"
          stroke="#221507"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M51,43 C59,41 65,45 68,50 C70,56 65,62 58,60 C53,58 49,52 51,43 Z"
          fill="#4ADE80"
          stroke="#221507"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M30,51 C36,51 39,57 37,63 C35,68 28,68 26,63 C25,58 26,51 30,51 Z"
          fill="#4ADE80"
          stroke="#221507"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Lat/Long Curves */}
        <ellipse cx="45" cy="45" rx="30" ry="12" stroke="#221507" strokeWidth="1.2" opacity="0.25" fill="none" />
        <ellipse cx="45" cy="45" rx="12" ry="30" stroke="#221507" strokeWidth="1.2" opacity="0.25" fill="none" />

        {/* Coffee Beans in Orbit */}
        <g transform="translate(6, 42) rotate(20) scale(0.65)">
          <path d="M6.5 4.5C3 8 3 16 7.5 19.5C12 23 19 21.5 20.5 16C22 10.5 17 4 12 3C9.5 2.5 7.8 3.2 6.5 4.5Z" fill="#4A2C1D" stroke="#221507" strokeWidth="2" />
        </g>
        <g transform="translate(74, 38) rotate(-40) scale(0.65)">
          <path d="M6.5 4.5C3 8 3 16 7.5 19.5C12 23 19 21.5 20.5 16C22 10.5 17 4 12 3C9.5 2.5 7.8 3.2 6.5 4.5Z" fill="#4A2C1D" stroke="#221507" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Stylized Burlap Coffee Bag with roasted beans spilling
 */
export function BurlapSackIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg viewBox="0 0 120 140" fill="none" className="w-full h-full" aria-hidden="true">
        {/* Tied Neck */}
        <polygon points="40,12 80,12 72,28 48,28" fill="#D4A373" stroke="#221507" strokeWidth="2.5" />
        <rect x="42" y="24" width="36" height="6" rx="2" fill="#E07A5F" stroke="#221507" strokeWidth="2" />
        {/* Main Sack Body */}
        <path
          d="M46,28 C28,34 16,50 14,80 C12,112 24,130 60,132 C96,130 108,112 106,80 C104,50 92,34 74,28 Z"
          fill="#D4A373"
          stroke="#221507"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Burlap Cross-Hatch Texture Lines */}
        <path d="M26 60 Q60 68 94 60" stroke="#B88A58" strokeWidth="1.2" fill="none" />
        <path d="M22 84 Q60 92 98 84" stroke="#B88A58" strokeWidth="1.2" fill="none" />
        <path d="M26 108 Q60 116 94 108" stroke="#B88A58" strokeWidth="1.2" fill="none" />
        {/* Stitched Label Badge */}
        <rect
          x="30"
          y="62"
          width="60"
          height="46"
          rx="4"
          fill="#FFF6E9"
          stroke="#221507"
          strokeWidth="2.2"
          strokeDasharray="4 2"
        />
        <text
          x="60"
          y="77"
          textAnchor="middle"
          fill="#221507"
          fontFamily="Fredoka, sans-serif"
          fontWeight="bold"
          fontSize="8.5"
          letterSpacing="0.2"
        >
          COFFEE
        </text>
        <text
          x="60"
          y="89"
          textAnchor="middle"
          fill="#221507"
          fontFamily="Fredoka, sans-serif"
          fontWeight="bold"
          fontSize="7.2"
        >
          MAKES A
        </text>
        <text
          x="60"
          y="100"
          textAnchor="middle"
          fill="#221507"
          fontFamily="Fredoka, sans-serif"
          fontWeight="bold"
          fontSize="7.8"
        >
          NICER INTERNET
        </text>
      </svg>
      {/* Scattered coffee beans around the base */}
      <div className="absolute -bottom-2 -right-4 flex items-center gap-1">
        <CoffeeBean className="w-5 h-5 rotate-45 transform" />
        <CoffeeBean className="w-4 h-4 -rotate-12 transform" />
        <CoffeeBean className="w-4 h-4 rotate-90 transform" />
      </div>
    </div>
  );
}

/**
 * Hand-drawn Chemex Pour-over Carafe with dripping droplets
 */
export function ChemexIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 90 140" fill="none" className="w-full h-full" aria-hidden="true">
        {/* Top cone */}
        <polygon
          points="15,15 75,15 54,64 36,64"
          fill="#FFFFFF"
          fillOpacity="0.65"
          stroke="#221507"
          strokeWidth="2.5"
        />
        {/* Filter inside top */}
        <polygon
          points="20,18 70,18 52,60 38,60"
          fill="#FFF6E9"
          stroke="#221507"
          strokeWidth="1.8"
          strokeDasharray="3 2"
        />
        {/* Coffee grounds in filter */}
        <polygon points="34,44 56,44 50,58 40,58" fill="#4A2C1D" stroke="#221507" strokeWidth="1.5" />
        {/* Wood collar waist */}
        <rect x="33" y="62" width="24" height="18" rx="2" fill="#D4A373" stroke="#221507" strokeWidth="2.2" />
        {/* Leather tie & bead */}
        <line x1="33" y1="71" x2="57" y2="71" stroke="#4A2C1D" strokeWidth="2.5" />
        <circle cx="56" cy="71" r="3" fill="#E07A5F" stroke="#221507" strokeWidth="1.5" />
        <path d="M56,74 Q60,82 58,90" stroke="#4A2C1D" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Bottom sphere / flask */}
        <path
          d="M36,78 C20,90 18,115 28,130 C36,138 54,138 62,130 C72,115 70,90 54,78 Z"
          fill="#FFFFFF"
          fillOpacity="0.65"
          stroke="#221507"
          strokeWidth="2.5"
        />
        {/* Dark coffee liquid filling bottom */}
        <path
          d="M24,106 C20,118 28,132 45,134 C62,132 70,118 66,106 C60,104 30,104 24,106 Z"
          fill="#4A2C1D"
          stroke="#221507"
          strokeWidth="2"
        />
        <ellipse cx="45" cy="106" rx="21" ry="4" fill="#2E1B10" stroke="#221507" strokeWidth="1.5" />

        {/* Animated Dripping Droplets */}
        <g className="animate-drip">
          <circle cx="45" cy="82" r="2.2" fill="#4A2C1D" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Torn Paper Edge Transition
 */
export function TornPaperDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 42"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-10 fill-white"
      >
        <path d="M0,0 L0,22 Q30,12 60,24 T120,18 T180,26 T240,14 T300,24 T360,18 T420,26 T480,16 T540,25 T600,18 T660,26 T720,14 T780,24 T840,18 T900,26 T960,16 T1020,25 T1080,18 T1140,24 T1200,18 L1200,42 L0,42 Z" />
      </svg>
    </div>
  );
}

