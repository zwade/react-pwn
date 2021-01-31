import * as React from "react";

import { NavigationContext } from "../../providers/navigation-provider";
import { classes } from "../../utils";

import "./index.scss";

export interface Props {
    href?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}

export const A = (props: Props) => {
    console.log(React);
    const { navigate } = React.useContext(NavigationContext);

    const onClick = () => (props.onClick?.(), props.href ? navigate(props.href) : undefined);
    return (
        <a className={classes("rp-anchor", props.className)} onClick={onClick}>{ props.children }</a>
    );
}