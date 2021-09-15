import * as React from "react";

export const ModalContext = React.createContext<HTMLDivElement | null>(null);

interface ModalProviderProps {
    children: React.ReactNode;
}

export const ModalProvider = (props: ModalProviderProps) => {
    const [domNode, setDomNode] = React.useState<HTMLDivElement | null>(null);

    return (
        <ModalContext.Provider value={domNode}>
            { props.children }
            <div ref={setDomNode}/>
        </ModalContext.Provider>
    )
}
