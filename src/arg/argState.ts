// GPC ARG access state — stored in the visitor's browser, as the caretaker intended.
// "The archive remembers who has been admitted."

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'gpc-arg-state';

export type ArgDoor = 'door1' | 'door2' | 'door3';

export interface ArgState {
  door1: boolean; // PARADIGM — unseals CV-04 phrase + Intercept 02
  door2: boolean; // LULLABY — unseals Directive 99 Annex A + Intercept 03
  door3: boolean; // ANTICIPATE — unseals the Staff Response Log
  attempts: number;
}

const DEFAULT_STATE: ArgState = { door1: false, door2: false, door3: false, attempts: 0 };

function readState(): ArgState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    const parsed = JSON.parse(raw) as Partial<ArgState>;
    return {
      door1: !!parsed.door1,
      door2: !!parsed.door2,
      door3: !!parsed.door3,
      attempts: parsed.attempts ?? 0
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

const listeners = new Set<() => void>();
let cache: ArgState = typeof window !== 'undefined' ? readState() : { ...DEFAULT_STATE };

function persist(next: ArgState) {
  cache = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage unavailable — archive degrades gracefully
  }
  listeners.forEach((l) => l());
}

export function getArgState(): ArgState {
  return cache;
}

export function unlockDoor(door: ArgDoor): void {
  persist({ ...cache, [door]: true });
}

export function registerAttempt(): void {
  persist({ ...cache, attempts: cache.attempts + 1 });
}

export function resetArgState(): void {
  persist({ ...DEFAULT_STATE });
}

/** React hook subscribing to ARG access state. */
export function useArgState(): ArgState {
  const [, force] = useState(0);
  const cb = useCallback(() => force((n) => n + 1), []);
  useEffect(() => {
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  }, [cb]);
  return cache;
}

/** Normalize a password guess: uppercase, trim, strip spaces/punctuation. */
export function normalizeGuess(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z]/g, '');
}
