export const classes = (...args: (string | undefined)[]) =>
    args
        .filter((x): x is string => x !== undefined)
        .join(" ");


export const unreachable = (arg: never): never => arg;
/**
 * Hi just a friendly reminder that this is _not_ an client problem.
 * Please don't spend too much time scrutinizing my mildly janky
 * web-dev practices ❤️
 *   -zwad3
 */
export const TheGreatLie = <T extends {}>(): T => {
    return new Proxy({} as T, {
        get: (_target, key) => {
            throw new Error(`Attempted to use value from unitialized context: ${String(key)}`);
        }
    });
};

export type FilterSymbol<T extends string | number | symbol> = T extends symbol ? never : T;
export type StringifyKey<T extends string | number | symbol> = `${FilterSymbol<T>}`;
export type ObjectKeys<T extends {}> = StringifyKey<keyof T>

export const keys = <T extends {}>(o: T): ObjectKeys<T>[] => Object.keys(o) as ObjectKeys<T>[];
