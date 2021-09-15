import * as React from "react";

import { classes } from "../../utils";

import "./index.scss";

export enum ButtonStyle {
    Primary = "primary",
    Secondary = "secondary",
    Hollow = "hollow",
    Danger = "danger",
    Safe = "safe",
}

export interface Props {
    label: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    style?: ButtonStyle;
    small?: boolean;
}

export const Button = (props: Props) => {
    return (
        <div
            className={classes(
                props.className,
                "bh-button",
                props.style ?? ButtonStyle.Primary,
                props.small ? "small" : ""
            )}
            onClick={() => props.onClick?.()}
        >
            <button
                disabled={props.disabled}
            >
                { props.label }
            </button>
        </div>
    );
}