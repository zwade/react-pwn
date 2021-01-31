import * as React from "react";

import { Palette, Palettes } from "../palettes";
import { keys } from "../utils";

export const PaletteContext = React.createContext<Palette>(Palettes.GreenOrange);

export interface Props {
    palette: Palette;
    children: React.ReactNode;
}

const formatHex = (n: number) => `#${n.toString(16).padStart(6, "0")}`;

export const PaletteProvider = (props: Props) => {
    // This is both a React provider and a css provider;
    const css = {} as Record<string, string>;
    for (const name of keys(props.palette)) {
        css[`--color-${name}`] = formatHex(props.palette[name]);
    }
    css["display"] = "contents";

    return (
        <PaletteContext.Provider value={props.palette}>
            <div style={css as React.CSSProperties}>
                { props.children }
            </div>
        </PaletteContext.Provider>
    );
};
