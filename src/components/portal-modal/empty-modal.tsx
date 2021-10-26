import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button, ButtonStyle } from "../button";
import { Frame } from "../frame";
import { ModalContext } from "./provider";

interface EmptyModalProps {
    onClose?: () => void;
    children: React.ReactNode;
}

const _EmptyModal = (props: EmptyModalProps) => {
    return (
        <div className="bh-modal">
            <div
                className="bh-modal-background"
                onClick={() => props.onClose?.()}
            />
            <div className="bh-modal-empty-content">
                { props.children}
            </div>
        </div>
    )
}

export const EmptyModal = (props: EmptyModalProps) => {
    const domElement = React.useContext(ModalContext);

    if (!domElement) {
        return null;
    }

    return ReactDOM.createPortal(<_EmptyModal {...props}/>, domElement);
}
