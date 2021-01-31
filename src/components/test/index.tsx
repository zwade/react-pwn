import * as React from "react";

import "./index.scss";

export const Test = (props: { children: React.ReactNode }) => {
    return (
        <div className="rp-test">
            { props.children }
        </div>
    )
}