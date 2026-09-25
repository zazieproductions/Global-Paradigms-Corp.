// GPC Annex Cryptologic Kit — client-side cipher utilities.
// Recovered from the 2006 archive image; the caretaker has added nothing to them.

// ------------------------------------------------------------
// MORSE
// ------------------------------------------------------------
export const MORSE_TABLE: Record<string, string> = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.',
  H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.',
  O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-',
  V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
};

export const MORSE_REVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(MORSE_TABLE).map(([k, v]) => [v, k])
);

export function toMorse(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map((ch) => {
      if (ch === ' ') return '/';
      return MORSE_TABLE[ch] ?? '';
    })
    .filter(Boolean)
    .join(' ');
}

export function fromMorse(morse: string): string {
  return morse
    .trim()
    .split(' ')
    .map((code) => (code === '/' ? ' ' : MORSE_REVERSE[code] ?? '□'))
    .join('');
}

// ------------------------------------------------------------
// VIGENÈRE (letters only, mod 26)
// ------------------------------------------------------------
const A = 65;

export function vigenere(text: string, key: string, decrypt = false): string {
  if (!key) return '';
  const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, '');
  if (!cleanKey) return '';
  let ki = 0;
  let out = '';
  for (const raw of text.toUpperCase()) {
    if (raw >= 'A' && raw <= 'Z') {
      const shift = cleanKey.charCodeAt(ki % cleanKey.length) - A;
      const c = raw.charCodeAt(0) - A;
      const v = decrypt ? (c - shift + 26) % 26 : (c + shift) % 26;
      out += String.fromCharCode(A + v);
      ki++;
    } else {
      out += raw;
    }
  }
  return out;
}

// ------------------------------------------------------------
// CAESAR
// ------------------------------------------------------------
export function caesar(text: string, shift: number, decrypt = false): string {
  const s = decrypt ? -shift : shift;
  let out = '';
  for (const raw of text) {
    if (raw >= 'A' && raw <= 'Z') out += String.fromCharCode(A + ((raw.charCodeAt(0) - A + s + 260) % 26));
    else if (raw >= 'a' && raw <= 'z') out += String.fromCharCode(97 + ((raw.charCodeAt(0) - 97 + s + 260) % 26));
    else out += raw;
  }
  return out;
}

// ------------------------------------------------------------
// NUMBERS-STATION GROUPING (5-char groups)
// ------------------------------------------------------------
export function toGroups(letters: string): string {
  const clean = letters.toUpperCase().replace(/[^A-Z]/g, '');
  const groups: string[] = [];
  for (let i = 0; i < clean.length; i += 5) {
    groups.push(clean.slice(i, i + 5));
  }
  return groups.join(' ');
}

// ------------------------------------------------------------
// ACOUSTIC LETTER FREQUENCY MAP (for spectral transmissions)
// Rows of a 5x7 dot-matrix glyph are mapped onto a frequency ladder.
// ------------------------------------------------------------
export const SPECTRAL_BASE_HZ = 900;
export const SPECTRAL_STEP_HZ = 620;

// 5x7 dot-matrix font, rows top→bottom, '1' = lit. A–Z.
export const FONT_5X7: Record<string, string[]> = {
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  B: ['11110', '10001', '11110', '10001', '10001', '10001', '11110'],
  C: ['01110', '10001', '10000', '10000', '10000', '10001', '01110'],
  D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
  E: ['11111', '10000', '11110', '10000', '10000', '10000', '11111'],
  F: ['11111', '10000', '11110', '10000', '10000', '10000', '10000'],
  G: ['01110', '10001', '10000', '10111', '10001', '10001', '01111'],
  H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  J: ['00111', '00010', '00010', '00010', '00010', '10010', '01100'],
  K: ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
  L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
  N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
  Q: ['01110', '10001', '10001', '10001', '10101', '10010', '01101'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  V: ['10001', '10001', '10001', '10001', '10001', '01010', '00100'],
  W: ['10001', '10001', '10001', '10101', '10101', '11011', '10001'],
  X: ['10001', '01010', '00100', '00100', '01010', '10001', '10001'],
  Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
  Z: ['11111', '00001', '00010', '00100', '01000', '10000', '11111'],
  ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000']
};
