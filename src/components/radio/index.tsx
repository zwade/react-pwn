import * as React from "react";
import { classes } from "../../utils";

import "./index.scss";

export interface Props<T> {
    options: readonly { label: React.ReactNode, value: T }[];
    value?: T;
    onChange?: (value: T) => void;
    disabled?: boolean;
}

export const Radio = <T extends {}>(props: Props<T>) => {
    return (
        <div className={classes("bh-radio", props.disabled ? "disabled" : "")}>
            {
                props.options.map(({ label, value }, i) => (
                    <div
                        key={i}
                        className={classes("radio-option", value === props.value ? "active" : "inactive")}
                        onClick={() => props.onChange?.(value)}
                    >
                        <div className="bubble"/>
                        <div className="label">{ label }</div>
                    </div>
                ))
            }
        </div>
    )
}