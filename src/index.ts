export const NO_NUMBERS = /\d/g;
export const JUST_NUMBERS = /\D/g;
export const NUMBERS_AND_COMMA = /[^\d,]/g;
export const NO_SPECIAL = /[;\\/:*?!()[\]"<>#|&'^~`´]/g;
export const NO_MATHEMATIC = /[/*+]/g;

export const NO_DASH = /\-/g;
export const NO_SLASH = /\//g;

export const NO_PLUS = /\+/g;
export const NO_STAR = /\*/g;

export const NO_AT = /[@]/g;
export const NO_PERCENT = /[%]/g;
export const NO_DOLLAR = /[$]/g;
export const NO_SPACE = /\s/g;
export const NO_MULTIPLE_SPACE = /\s{2,}/g;
export const NO_DOT = /\./g;
export const NO_COMMA = /,/g;

export const COMMUN_TEXT = [
  NO_SPECIAL,
  NO_MATHEMATIC,
  NO_AT,
  NO_DOLLAR,
  NO_PERCENT,
  NO_MULTIPLE_SPACE
];

export const applyPatterns = (value: string, patterns: RegExp | RegExp[]) => {
  let normalPatterns: RegExp[] = [];
  
  if (Array.isArray(patterns)) {
    normalPatterns = [...patterns];
  } else if (patterns) {
    normalPatterns = [patterns];
  }

  if (normalPatterns.length > 0) {
    return normalPatterns.reduce(
      (value, pattern) => value.replace(pattern, ""),
      value
    );
  }

  return value;
};

export default applyPatterns;
