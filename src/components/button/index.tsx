import * as React from "react";

import { classes } from "../../utils";

import "./index.scss";

export interface Props {
    label: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export const Button = (props: Props) => {
    return (
        <button
            className={classes(props.className, "bh-button")}
            onClick={() => props.onClick?.()}
            disabled={props.disabled}
        >
            { props.label }
        </button>
    );
}