'use client';

export default function FloatingClouds() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cloud 1 */}
      <div
        className="absolute top-10 left-0 animate-drift"
        style={{ animationDuration: '25s', animationDelay: '0s' }}
      >
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 40C20 40 12 32 12 22C12 13 19 6 28 6C32 2 38 0 45 0C58 0 68 10 68 23C75 26 80 33 80 42C80 53 71 62 60 62H30C17 62 7 52 7 40C7 28 16 18 28 18"
            fill="currentColor"
            className="text-white/40 dark:text-white/15"
          />
        </svg>
      </div>

      {/* Cloud 2 */}
      <div
        className="absolute top-1/4 right-0 animate-drift"
        style={{ animationDuration: '30s', animationDelay: '5s' }}
      >
        <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25 33C17 33 10 26 10 18C10 11 15 5 22 5C25 2 30 0 36 0C46 0 54 8 54 18C60 20 65 26 65 34C65 43 57 50 48 50H25C14 50 5 41 5 30C5 20 13 12 23 12"
            fill="currentColor"
            className="text-white/50 dark:text-white/8"
          />
        </svg>
      </div>

      {/* Cloud 3 */}
      <div
        className="absolute top-1/2 left-1/4 animate-drift"
        style={{ animationDuration: '35s', animationDelay: '10s' }}
      >
        <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M35 48C23 48 14 39 14 28C14 18 21 10 30 10C34 4 41 0 50 0C66 0 78 12 78 28C87 31 94 39 94 49C94 62 83 72 70 72H35C19 72 7 60 7 45C7 31 17 20 30 20"
            fill="currentColor"
            className="text-white/60 dark:text-white/15"
          />
        </svg>
      </div>

      {/* Cloud 4 */}
      <div
        className="absolute bottom-20 right-1/3 animate-drift"
        style={{ animationDuration: '28s', animationDelay: '15s' }}
      >
        <svg width="110" height="55" viewBox="0 0 110 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M28 41C18 41 10 33 10 23C10 15 16 8 24 8C28 3 34 0 41 0C53 0 62 9 62 21C70 24 76 31 76 40C76 51 66 60 54 60H28C16 60 7 51 7 40C7 29 15 20 26 20"
            fill="currentColor"
            className="text-white/55 dark:text-white/10"
          />
        </svg>
      </div>

      {/* Cloud 5 - Accent */}
      <div
        className="absolute top-2/3 left-0 animate-drift"
        style={{ animationDuration: '32s', animationDelay: '20s' }}
      >
        <svg width="130" height="65" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 45C22 45 13 36 13 25C13 16 19 9 27 9C31 4 37 0 44 0C59 0 70 11 70 25C78 28 84 36 84 46C84 58 74 68 62 68H32C18 68 7 57 7 43C7 30 16 19 28 19"
            fill="currentColor"
            className="text-white/40 dark:text-blue-300/10"
          />
        </svg>
      </div>

      {/* Floating elements with pulse effect */}
      <div className="absolute top-20 right-10 w-3 h-3 rounded-full bg-blue-400/20 dark:bg-blue-300/10 animate-pulse-glow"></div>
      <div className="absolute top-1/3 left-20 w-2 h-2 rounded-full bg-pink-400/20 dark:bg-pink-300/10 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-blue-400/15 dark:bg-blue-300/8 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}
