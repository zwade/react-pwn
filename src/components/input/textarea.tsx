import * as React from "react";
import { classes } from "../../utils";

export interface Props {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export const TextArea = (props: Props) => {
    return (
        <textarea
            className={classes("bh-textarea", props.className)}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange?.(e.target.value)}
            disabled={props.disabled}
        />
    );
}