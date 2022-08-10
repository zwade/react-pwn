type digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type shortDigits = 0 | 1 | 2;

export type IndividualPalette<T extends string> = `${T}-0${digits}`;
export type ShortPalette<T extends string> = `${T}-0${shortDigits}`;
export type Palette =
    & { [K in ShortPalette<"error">]: number }
    & { [K in ShortPalette<"success">]: number }
    & { [K in ShortPalette<"warning">]: number }
    & { [K in ShortPalette<"info">]: number }
    & { [K in IndividualPalette<"neutral">]: number }
    & { [K in IndividualPalette<"primary">]: number }
    & { [K in IndividualPalette<"secondary">]: number }
    & { "is-dark-theme": 0 | 1 };
    ;
