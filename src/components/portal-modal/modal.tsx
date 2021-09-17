import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button, ButtonStyle } from "../button";
import { Frame } from "../frame";
import { ModalContext } from "./provider";

interface ModalProps {
    title?: string;
    onContinue?: () => void;
    onCancel?: () => void;
    onClose?: () => void;
    dangerous?: boolean;
    cancelMessage?: string;
    continueMessage?: string;
    children: React.ReactNode;
}

const _Modal = (props: ModalProps) => {
    return (
        <div className="bh-modal">
            <div
                className="bh-modal-background"
                onClick={() => (props.onClose ?? props.onCancel)?.()}
            />
            <Frame className="bh-modal-frame">
                { props.title && <div className="title">{ props.title }</div> }
                { props.children }
                <div className="action-row">
                    <Button
                        className="cancel"
                        onClick={ props.onCancel }
                        label={props.cancelMessage ?? "Cancel"}
                        style={ButtonStyle.Hollow}
                    />
                    <Button
                        className="continue"
                        small
                        onClick={ props.onContinue }
                        label={props.continueMessage ?? "Continue"}
                        style={props.dangerous ? ButtonStyle.Danger : ButtonStyle.Primary}
                    />
                </div>
            </Frame>
        </div>
    )
}

export const Modal = (props: ModalProps) => {
    const domElement = React.useContext(ModalContext);

    if (!domElement) {
        return null;
    }

    return ReactDOM.createPortal(<_Modal {...props}/>, domElement);
}