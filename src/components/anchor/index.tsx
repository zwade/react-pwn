import * as React from "react";

import { NavigationContext } from "../../providers/navigation-provider";
import { classes } from "../../utils";

import "./index.scss";

export interface Props {
    href?: string;
    target?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}

export const A = (props: Props) => {
    const { navigate } = React.useContext(NavigationContext);

    const onClick = () => {
        props.onClick?.();
        if (props.href) {
            // TODO(zwade): Check origin
            if (props.href.startsWith("http")) {
                window.open(props.href, props.target ?? "_blank");
            } else {
                navigate(props.href);
            }
        }
    };
    return (
        <a className={classes("rp-anchor", props.className)} onClick={onClick}>{ props.children }</a>
    );
}