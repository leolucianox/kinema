"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Kit, Accent, AnimationPreset } from "@/lib/kits";

type EasingType = "linear" | "expo" | "spring" | "bounce";

const COLOR_MAP: Record<Accent, string> = {
  spark: "#00e5a0",
  volt: "#a855f7",
  glow: "#f59e0b",
};

function getTransition(
  easing: EasingType,
  duration: number,
): Record<string, unknown> {
  if (easing === "spring") {
    return { type: "spring", stiffness: 160, damping: 22 };
  }
  if (easing === "bounce") {
    return { type: "spring", stiffness: 400, damping: 8 };
  }
  const easings = {
    linear: [0, 0, 1, 1] as [number, number, number, number],
    expo: [0.87, 0, 0.13, 1] as [number, number, number, number],
  };
  return { duration, ease: easings[easing] };
}

// --- Animation canvases ---

function IdentityAnimation({
  color,
  easing,
  duration,
  replayKey,
}: {
  color: Accent;
  easing: EasingType;
  duration: number;
  replayKey: number;
}) {
  const letters = "KINEMA".split("");
  const t = getTransition(easing, duration);
  return (
    <div key={replayKey} className="flex items-center gap-1">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...t, delay: i * (duration * 0.15) }}
          className="font-display text-5xl font-bold"
          style={{ color: COLOR_MAP[color] }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

function ScrollAnimation({
  color,
  easing,
  duration,
  replayKey,
}: {
  color: Accent;
  easing: EasingType;
  duration: number;
  replayKey: number;
}) {
  const t = getTransition(easing, duration);
  return (
    <div key={replayKey} className="grid w-full max-w-[280px] grid-cols-3 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...t, delay: i * (duration * 0.12) }}
          className="h-16 rounded-xl"
          style={{ backgroundColor: COLOR_MAP[color] + "40" }}
        />
      ))}
    </div>
  );
}

function MicroAnimation({
  color,
  easing,
  duration,
  replayKey,
}: {
  color: Accent;
  easing: EasingType;
  duration: number;
  replayKey: number;
}) {
  const controls = useAnimationControls();
  const t = getTransition(easing, duration * 0.5);

  useEffect(() => {
    const run = async () => {
      await new Promise((r) => setTimeout(r, 400));
      await controls.start({ scale: 1.06, ...t });
      await controls.start({ scale: 0.94, ...t });
      await controls.start({ scale: 1, ...t });
    };
    run();
  }, [replayKey, controls]);

  return (
    <motion.button
      animate={controls}
      className="rounded-full px-8 py-3 text-sm font-semibold text-void"
      style={{ backgroundColor: COLOR_MAP[color] }}
    >
      Click me
    </motion.button>
  );
}

function EditorialAnimation({
  color,
  easing,
  duration,
  replayKey,
}: {
  color: Accent;
  easing: EasingType;
  duration: number;
  replayKey: number;
}) {
  const lines = ["Motion as", "language."];
  const t = getTransition(easing, duration);
  return (
    <div key={replayKey} className="flex flex-col gap-1">
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ ...t, delay: i * (duration * 0.3) }}
            className="font-display text-4xl font-bold leading-tight"
            style={{ color: i === 1 ? COLOR_MAP[color] : "var(--light)" }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function DataVizAnimation({
  color,
  easing,
  duration,
  replayKey,
}: {
  color: Accent;
  easing: EasingType;
  duration: number;
  replayKey: number;
}) {
  const bars = [65, 90, 40, 75, 55];
  const t = getTransition(easing, duration);
  return (
    <div key={replayKey} className="flex h-36 items-end gap-2">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ ...t, delay: i * (duration * 0.1) }}
          className="flex-1 origin-bottom rounded-t-lg"
          style={{
            height: `${height}%`,
            backgroundColor: COLOR_MAP[color],
            opacity: 0.5 + i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

function GenerativeAnimation({
  color,
  duration,
  replayKey,
}: {
  color: Accent;
  duration: number;
  replayKey: number;
}) {
  return (
    <motion.div
      key={replayKey}
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 70% 70% 30% 30%",
          "50% 50% 30% 70% / 50% 30% 70% 50%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
        ],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{ duration: duration, ease: "easeInOut", repeat: Infinity }}
      className="h-28 w-28"
      style={{ backgroundColor: COLOR_MAP[color] }}
    />
  );
}

const ANIMATION_MAP: Record<
  AnimationPreset,
  React.ComponentType<{
    color: Accent;
    easing: EasingType;
    duration: number;
    replayKey: number;
  }>
> = {
  identity: IdentityAnimation,
  scroll: ScrollAnimation,
  micro: MicroAnimation,
  editorial: EditorialAnimation,
  data: DataVizAnimation,
  generative: GenerativeAnimation,
};

// --- Main component ---

interface AnimationPlaygroundProps {
  kit: Kit;
  compact?: boolean;
}

export function AnimationPlayground({ kit, compact = false }: AnimationPlaygroundProps) {
  const t = useTranslations("kit");

  const [speed, setSpeed] = useState(1);
  const [easing, setEasing] = useState<EasingType>("expo");
  const [scale, setScale] = useState(1);
  const [loop, setLoop] = useState(false);
  const [color, setColor] = useState<Accent>(kit.accent);
  const [replayKey, setReplayKey] = useState(0);

  const duration = kit.duration / speed;
  const AnimationCanvas = ANIMATION_MAP[kit.animationPreset];

  useEffect(() => {
    if (!loop) return;
    const totalDuration = (duration + 0.5) * 1000 + 400;
    const timer = setTimeout(() => setReplayKey((k) => k + 1), totalDuration);
    return () => clearTimeout(timer);
  }, [loop, replayKey, duration]);

  const reset = () => {
    setSpeed(1);
    setEasing("expo");
    setScale(1);
    setLoop(false);
    setColor(kit.accent);
    setReplayKey((k) => k + 1);
  };

  return (
    <div className="flex flex-col">
      {/* Controls */}
      <div className="flex flex-wrap items-end gap-x-8 gap-y-5 border-y border-edge px-global py-5">
        <PlaygroundSlider
          label={t("speed")}
          value={speed}
          min={0.25}
          max={3}
          step={0.25}
          unit="×"
          onChange={setSpeed}
        />
        <PlaygroundSlider
          label={t("scale")}
          value={scale}
          min={0.5}
          max={2}
          step={0.1}
          unit="×"
          onChange={setScale}
        />

        {!compact && (
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs uppercase tracking-wide text-dim">
              {t("easing")}
            </span>
            <div className="flex overflow-hidden rounded-full border border-edge">
              {(["linear", "expo", "spring", "bounce"] as EasingType[]).map((e) => (
                <button
                  key={e}
                  type="button"
                  onClick={() => setEasing(e)}
                  aria-pressed={easing === e}
                  className={`px-3 py-2 font-mono text-xs transition-colors ${
                    easing === e
                      ? "bg-spark text-void"
                      : "text-dim hover:text-light"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
        )}

        {!compact && (
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs uppercase tracking-wide text-dim">
              {t("color")}
            </span>
            <div className="flex gap-2">
              {(["spark", "volt", "glow"] as Accent[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  aria-pressed={color === c}
                  className={`h-7 w-7 rounded-full transition-transform ${
                    color === c ? "scale-125 ring-2 ring-light/40 ring-offset-1 ring-offset-void" : ""
                  }`}
                  style={{ backgroundColor: COLOR_MAP[c] }}
                  aria-label={c}
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs uppercase tracking-wide text-dim">{t("loop")}</span>
          <button
            type="button"
            onClick={() => setLoop((v) => !v)}
            aria-pressed={loop}
            className={`flex h-9 items-center gap-2 rounded-full border px-4 font-mono text-xs transition-colors ${
              loop
                ? "border-spark text-spark"
                : "border-edge text-dim hover:text-light"
            }`}
          >
            {loop ? "On" : "Off"}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setReplayKey((k) => k + 1)}
          className="flex h-9 items-center gap-2 rounded-full border border-edge px-4 font-mono text-xs text-dim transition-colors hover:border-light hover:text-light"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          {t("replay")}
        </button>

        <button
          type="button"
          onClick={reset}
          className="ml-auto flex h-9 items-center gap-2 rounded-full border border-edge px-4 font-mono text-xs text-dim transition-colors hover:border-light hover:text-light"
        >
          {t("resetText")}
        </button>
      </div>

      {/* Animation canvas */}
      <div className="flex min-h-[280px] items-center justify-center overflow-hidden bg-surface px-global py-16">
        <div style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
          <AnimationCanvas
            color={color}
            easing={easing}
            duration={duration}
            replayKey={replayKey}
          />
        </div>
      </div>
    </div>
  );
}

function PlaygroundSlider({
  label,
  value,
  min,
  max,
  step,
  unit = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-wide text-dim">
        {label}
        <span className="text-light">
          {Number.isInteger(value) ? value : value.toFixed(2)}
          {unit}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-1 w-40 cursor-pointer appearance-none rounded-full bg-edge accent-spark"
      />
    </label>
  );
}
