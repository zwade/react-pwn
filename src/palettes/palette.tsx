type digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type IndividualPalette<T extends string> = `${T}-0${digits}`;
export type Palette =
    {
        error: number;
    }
    & { [K in IndividualPalette<"neutral">]: number }
    & { [K in IndividualPalette<"primary">]: number }
    & { [K in IndividualPalette<"secondary">]: number }
    ;