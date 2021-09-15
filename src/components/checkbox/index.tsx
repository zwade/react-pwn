import * as React from "react";
import { classes } from "../../utils";

import "./index.scss";

export interface Props<T extends any> {
    value: Set<T>;
    options: { label: string, value: T }[];
    onChange?: (value: Set<T>) => void;
    className?: string;
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
        <div className={classes("bh-checkbox", props.className)}>
            {
                props.options.map((option) => (
                    <div
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