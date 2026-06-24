"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AlignLeft, AlignCenter, RotateCcw } from "lucide-react";
import type { Typeface } from "@/lib/typefaces";

interface TypeTesterProps {
  typeface: Typeface;
  defaultText: string;
  /** Compact mode trims the control set for the homepage embed. */
  compact?: boolean;
}

type Align = "left" | "center";

// The signature interactive feature. The specimen is a contentEditable surface
// (uncontrolled, so the caret never jumps); the controls drive inline style.
export function TypeTester({ typeface, defaultText, compact = false }: TypeTesterProps) {
  const t = useTranslations("specimen");
  const specimenRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState(compact ? 64 : 120);
  const [weight, setWeight] = useState(typeface.wght.default);
  const [tracking, setTracking] = useState(0);
  const [leading, setLeading] = useState(1.05);
  const [align, setAlign] = useState<Align>("left");
  const [upper, setUpper] = useState(false);
  const [ligatures, setLigatures] = useState(true);

  // Seed the editable surface once on mount.
  useEffect(() => {
    if (specimenRef.current) specimenRef.current.textContent = defaultText;
  }, [defaultText]);

  const reset = () => {
    if (specimenRef.current) specimenRef.current.textContent = defaultText;
    setSize(compact ? 64 : 120);
    setWeight(typeface.wght.default);
    setTracking(0);
    setLeading(1.05);
    setAlign("left");
    setUpper(false);
    setLigatures(true);
  };

  return (
    <div className="flex flex-col">
      {/* Controls */}
      <div className="flex flex-wrap items-end gap-x-8 gap-y-5 border-y border-grid px-global py-5">
        <Slider
          label={t("size")}
          value={size}
          min={12}
          max={240}
          step={1}
          unit="px"
          onChange={setSize}
        />
        <Slider
          label={t("weight")}
          value={weight}
          min={typeface.wght.min}
          max={typeface.wght.max}
          step={1}
          onChange={setWeight}
        />
        {!compact && (
          <>
            <Slider
              label={t("tracking")}
              value={tracking}
              min={-5}
              max={20}
              step={0.5}
              unit="%"
              onChange={setTracking}
            />
            <Slider
              label={t("leading")}
              value={leading}
              min={0.8}
              max={2}
              step={0.05}
              onChange={setLeading}
            />
          </>
        )}

        <Segmented label={t("alignment")}>
          <IconToggle
            active={align === "left"}
            onClick={() => setAlign("left")}
            label="Align left"
          >
            <AlignLeft className="h-4 w-4" />
          </IconToggle>
          <IconToggle
            active={align === "center"}
            onClick={() => setAlign("center")}
            label="Align center"
          >
            <AlignCenter className="h-4 w-4" />
          </IconToggle>
        </Segmented>

        <Segmented label={t("case")}>
          <IconToggle active={!upper} onClick={() => setUpper(false)} label="Sentence case">
            <span className="font-mono text-xs">Aa</span>
          </IconToggle>
          <IconToggle active={upper} onClick={() => setUpper(true)} label="Uppercase">
            <span className="font-mono text-xs">AA</span>
          </IconToggle>
        </Segmented>

        {!compact && (
          <button
            type="button"
            onClick={() => setLigatures((v) => !v)}
            aria-pressed={ligatures}
            className={`flex h-9 items-center gap-2 border px-3 font-mono text-xs transition-colors ${
              ligatures ? "border-ink text-ink" : "border-grid text-muted hover:text-ink"
            }`}
          >
            {t("ligatures")}
          </button>
        )}

        <button
          type="button"
          onClick={reset}
          aria-label={t("resetText")}
          className="ml-auto flex h-9 items-center gap-2 border border-grid px-3 font-mono text-xs text-muted transition-colors hover:border-ink hover:text-ink"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          {t("resetText")}
        </button>
      </div>

      {/* Editable specimen */}
      <div
        ref={specimenRef}
        role="textbox"
        aria-label={t("testerTitle")}
        aria-multiline="true"
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        className="min-h-[1.2em] cursor-text px-global py-12 text-ink outline-none"
        style={{
          fontFamily: typeface.cssVar,
          fontSize: `${size}px`,
          fontWeight: weight,
          letterSpacing: `${tracking / 100}em`,
          lineHeight: leading,
          textAlign: align,
          textTransform: upper ? "uppercase" : "none",
          fontFeatureSettings: ligatures ? '"liga" 1, "dlig" 1' : '"liga" 0, "dlig" 0',
          wordBreak: "break-word",
        }}
      />
    </div>
  );
}

function Slider({
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
      <span className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-wide text-muted">
        {label}
        <span className="text-ink">
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
        className="h-1 w-40 cursor-pointer appearance-none rounded-full bg-grid accent-vermilion"
      />
    </label>
  );
}

function Segmented({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-xs uppercase tracking-wide text-muted">{label}</span>
      <div className="flex w-fit border border-grid">{children}</div>
    </div>
  );
}

function IconToggle({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`flex h-9 w-9 items-center justify-center transition-colors ${
        active ? "bg-ink text-paper" : "text-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
