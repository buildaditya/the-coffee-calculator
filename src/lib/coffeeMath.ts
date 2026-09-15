/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Daily rate: 2.25 billion cups per day
export const BASE_DAILY_RATE = 2_250_000_000;
export const SECONDS_IN_DAY = 86_400;

/**
 * Calculates cups of coffee consumed since UTC midnight today
 */
export function getCupsToday(now: number = Date.now()): number {
  const date = new Date(now);
  const startOfDayUtc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    0,
    0,
    0,
    0
  );
  const msSinceMidnight = Math.max(0, now - startOfDayUtc);
  const secondsSinceMidnight = msSinceMidnight / 1000;
  return BASE_DAILY_RATE * (secondsSinceMidnight / SECONDS_IN_DAY);
}

/**
 * Formats a number with comma separators.
 */
export function formatWithCommas(value: number): string {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(Math.floor(value));
}

export interface HeroEquivalencyItem {
  id: string;
  icon: 'pool' | 'rocket' | 'earth' | 'eiffel';
  label: (cups: number) => { prefix: string; value: string; suffix: string };
  altJoke: string;
}

/**
 * Hero rotating equivalency items (matches Image 1 reference)
 */
export const HERO_EQUIVALENCIES: HeroEquivalencyItem[] = [
  {
    id: 'pool',
    icon: 'pool',
    label: (cups: number) => {
      const pools = Math.floor(cups / 10_416_667);
      return {
        prefix: "That's enough coffee to fill ",
        value: `${formatWithCommas(pools)} Olympic swimming pools`,
        suffix: '.',
      };
    },
    altJoke: 'lifeguards were not trained for this',
  },
  {
    id: 'rocket',
    icon: 'rocket',
    label: (cups: number) => {
      const tanks = Math.floor(cups / 15_200_000);
      return {
        prefix: "That's enough to fill ",
        value: `${formatWithCommas(tanks)} Saturn V fuel tanks`,
        suffix: '.',
      };
    },
    altJoke: 'houston, we have a caffeine problem',
  },
  {
    id: 'earth',
    icon: 'earth',
    label: (cups: number) => {
      const laps = Math.floor((cups * 0.00008) / 40_075);
      return {
        prefix: "Wrapped end to end, that's ",
        value: `${formatWithCommas(laps)} laps around the earth`,
        suffix: '.',
      };
    },
    altJoke: 'the earth would like a word',
  },
  {
    id: 'eiffel',
    icon: 'eiffel',
    label: (cups: number) => {
      const towers = Math.floor((cups * 0.25) / 10_100_000);
      return {
        prefix: 'It weighs as much as ',
        value: `${formatWithCommas(towers)} Eiffel Towers`,
        suffix: ', by weight.',
      };
    },
    altJoke: 'paris is judging you',
  },
];

export interface OtherWordsCard {
  id: string;
  type: 'everest' | 'moon' | 'elephant' | 'ocean';
  compute: (cups: number) => { before: string; bold: string; after: string };
  altJoke: string;
}

/**
 * The 4 cards in the "In other words..." section (matches Image 1 reference)
 */
export const OTHER_WORDS_CARDS: OtherWordsCard[] = [
  {
    id: 'everest',
    type: 'everest',
    compute: (cups: number) => {
      // 8,848.86 m Everest / 0.1m cup ≈ 88,489 cups
      const times = Math.max(1, Math.floor(cups / 88_489));
      return {
        before: 'You could stack coffee cups ',
        bold: `${formatWithCommas(times)}x`,
        after: ' to reach Mount Everest.',
      };
    },
    altJoke: 'and still not find decent Wi-Fi at the top',
  },
  {
    id: 'moon',
    type: 'moon',
    compute: (cups: number) => {
      const trips = Math.max(1, Math.floor(cups / 80_000_000));
      return {
        before: "That's enough for ",
        bold: `${formatWithCommas(trips)}`,
        after: ' trips to the Moon.',
      };
    },
    altJoke: 'apollo 11 ran on black filter coffee',
  },
  {
    id: 'elephant',
    type: 'elephant',
    compute: (cups: number) => {
      // 1 cup ≈ 0.25 kg; 1 elephant ≈ 5,000 kg
      const count = Math.max(1, Math.floor((cups * 0.25) / 5_000));
      return {
        before: 'It weighs as much as ',
        bold: `${formatWithCommas(count)}`,
        after: ' elephants.',
      };
    },
    altJoke: 'an elephant never forgets... its espresso',
  },
  {
    id: 'ocean',
    type: 'ocean',
    compute: (cups: number) => {
      // Simulated comic ocean fraction (around 0.031% at mid-day)
      const pct = Math.max(0.001, (cups / 2_250_000_000) * 0.055).toFixed(3);
      return {
        before: 'Or ',
        bold: `${pct}%`,
        after: " of the Earth's oceans (yes, really).",
      };
    },
    altJoke: 'fish are swimming significantly faster',
  },
];

/**
 * Approved joke pool for the counter tap easter egg
 */
export const COUNTER_JOKES = [
  "That's 2.4 billion people pretending to be functional. ☕",
  "that's a lot of jitters",
  'somewhere a barista just sighed',
  'your heart rate went up a little just reading this',
  "decaf exists. this number doesn't know that",
  "the world's hands are shaking slightly right now",
  'this number does not include tea drinkers judging us',
];
