import * as React from "react";
import { classes } from "../../utils";

export interface Props {
    type?: "text" | "password"
    value?: string;
    onChange?: (value: string) => void;
    onEnter?: () => void;
    placeholder?: string;
    disabled?: boolean;
    invalid?: string;
    error?: string;
    forceError?: boolean;
}

export const Input = (props: Props) => {
    const [hasBlurred, setHasBlurred] = React.useState(false);
    const showError = props.error && (hasBlurred || props.forceError);
    const errorCls = showError ? "error" : undefined;

    return (
        <div
            className="bh-input"
        >
            <input
                className={classes(props.invalid ? "invalid" : undefined, errorCls)}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onKeyDown={(e) => e.key === "Enter" ? props.onEnter?.() : undefined}
                onChange={(e) => props.onChange?.(e.target.value)}
                onBlur={() => setHasBlurred(true)}
                disabled={props.disabled}
            />
            {
                showError
                    ? <div className="error-msg">{ props.error }</div>
                    : undefined
            }
        </div>
    );
}