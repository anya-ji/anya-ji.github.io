import React from "react";

// Pale, shiny tones — a white core with the faintest tinted glow.
const COLORS = [
  { core: "#ffffff", glow: "#fff4cf" },
  { core: "#fffdf5", glow: "#ffeaa8" },
  { core: "#f7fcff", glow: "#c7e8fb" },
  { core: "#fff8fc", glow: "#ffd3e6" },
  { core: "#fbf8ff", glow: "#ddd0ff" },
  { core: "#f6fffb", glow: "#bff2e2" },
];
const SPARKLE_COUNT = 16;
const SPARKLE_LIFETIME = 1100; // keep in sync with the longest sparkle animation

// Four-pointed star, drawn from the center so rotation stays centered.
const SparkleIcon = ({ core, glow }) => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
    <path
      d="M12 0c.7 6.2 5.1 10.6 12 12-6.9 1.4-11.3 5.8-12 12-.7-6.2-5.1-10.6-12-12C6.9 10.6 11.3 6.2 12 0z"
      fill={core}
      stroke={glow}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

// `spread` scales how far the sparkles travel. The portrait burst has to clear
// a 150px circle to be seen at all; a burst in open space does not.
const makeSparkles = (spread = 1) => {
  const id = Date.now() + Math.random();
  // Spread the sparkles evenly around the circle, then jitter so bursts differ.
  return Array.from({ length: SPARKLE_COUNT }, (_, i) => {
    const angle =
      (i / SPARKLE_COUNT) * 2 * Math.PI + (Math.random() - 0.5) * 0.5;
    const distance = (120 + Math.random() * 80) * spread;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      key: `${id}-${i}`,
      dx: Math.cos(angle) * distance,
      // Bias the burst upward so it reads as a fountain before gravity takes over.
      dy: Math.sin(angle) * distance - 25,
      // Gravity is applied on its own layer and accelerates the whole flight.
      fall: 90 + Math.random() * 70,
      size: 5 + Math.random() * 7,
      rotation: (Math.random() - 0.5) * 480,
      duration: 950 + Math.random() * 150,
      delay: Math.random() * 90,
      color,
    };
  });
};

// Nested spans compose the motion: radial X, radial Y, gravity, and spin/fade.
// Keeping gravity on its own layer avoids a scripted apex, so the arc stays
// smooth instead of stalling before the drop.
const Sprites = ({ sparkles }) =>
  sparkles.map((s) => (
    <span
      key={s.key}
      className="sparkle-x"
      style={{
        "--dx": `${s.dx}px`,
        animationDuration: `${s.duration}ms`,
        animationDelay: `${s.delay}ms`,
      }}
    >
      <span
        className="sparkle-y"
        style={{
          "--dy": `${s.dy}px`,
          animationDuration: `${s.duration}ms`,
          animationDelay: `${s.delay}ms`,
        }}
      >
        <span
          className="sparkle-g"
          style={{
            "--fall": `${s.fall}px`,
            animationDuration: `${s.duration}ms`,
            animationDelay: `${s.delay}ms`,
          }}
        >
          <span
            className="sparkle"
            style={{
              "--rot": `${s.rotation}deg`,
              "--glow": s.color.glow,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.duration}ms`,
              animationDelay: `${s.delay}ms`,
            }}
          >
            <SparkleIcon core={s.color.core} glow={s.color.glow} />
          </span>
        </span>
      </span>
    </span>
  ));

// Holds the in-flight bursts and retires each one when its animation ends.
export const useSparkleBursts = (spread) => {
  const [bursts, setBursts] = React.useState([]);
  const timeouts = React.useRef([]);

  React.useEffect(() => () => timeouts.current.forEach(clearTimeout), []);

  const add = React.useCallback(
    (at) => {
      const burst = { id: Date.now() + Math.random(), sparkles: makeSparkles(spread), ...at };
      setBursts((prev) => [...prev, burst]);
      timeouts.current.push(
        setTimeout(
          () => setBursts((prev) => prev.filter((b) => b.id !== burst.id)),
          SPARKLE_LIFETIME + 300
        )
      );
    },
    [spread]
  );

  return [bursts, add];
};

// Each burst needs its own keyed node. Returning a bare nested array would make
// React reconcile bursts by position, so retiring one burst would remount (and
// restart) every burst still in flight.
const Bursts = ({ bursts, positioned }) =>
  bursts.map((burst) =>
    positioned ? (
      <span
        key={burst.id}
        className="sparkle-origin"
        style={{ left: burst.x, top: burst.y }}
      >
        <Sprites sparkles={burst.sparkles} />
      </span>
    ) : (
      <React.Fragment key={burst.id}>
        <Sprites sparkles={burst.sparkles} />
      </React.Fragment>
    )
  );

// Full-viewport layer for bursts fired at arbitrary click coordinates.
export const SparkleOverlay = ({ bursts }) => (
  <span className="sparkle-overlay" aria-hidden="true">
    <Bursts bursts={bursts} positioned />
  </span>
);

// Bursts from the centre of whatever it wraps, from behind it.
const SparkleBurst = ({ children, className = "", onClick }) => {
  const [bursts, add] = useSparkleBursts();

  const handleClick = (e) => {
    add();
    if (onClick) onClick(e);
  };

  return (
    <span className={`sparkle-wrapper ${className}`} onClick={handleClick}>
      {children}
      <span className="sparkle-layer">
        <Bursts bursts={bursts} />
      </span>
    </span>
  );
};

export default SparkleBurst;
