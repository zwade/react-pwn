import * as React from "react";
import { classes } from "../../utils";

import "./index.scss";

export interface Props<T extends any> {
    value: Set<T>;
    options: { label: React.ReactNode, value: T }[];
    onChange?: (value: Set<T>) => void;
    className?: string;
    disabled?: boolean;
}

const add = <T extends any>(s: Set<T>, datum: T) => {
    const clone = new Set(s);
    clone.add(datum);
    return clone;
}

const del = <T extends any>(s: Set<T>, datum: T) => {
    const clone = new Set(s)
    clone.delete(datum);
    return clone;
}

const toggle = <T extends any>(s: Set<T>, datum: T) => {
    if (s.has(datum)) {
        return del(s, datum);
    } else {
        return add(s, datum);
    }
}

export const Checkbox = <T extends any>(props: Props<T>) => {
    return (
        <div className={classes("bh-checkbox", props.className, props.disabled ? "disabled" : "")}>
            {
                props.options.map((option, i) => (
                    <div
                        key={i}
                        className="bh-checkbox-row"
                        onClick={() => props.onChange?.(toggle(props.value, option.value))}
                    >
                        <div
                            className="checkbox"
                            data-clicked={props.value.has(option.value)}
                        />
                        <div className="label">
                            { option.label }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}