import * as React from "react";

export const NavigationContext = React.createContext<{ navigate: (path: string) => void }>({
    navigate: () => { throw new Error("Cannot navigate without first instantiating a NavigationProvider."); }
});

export interface Props {
    navigate: (path: string) => void;
    children?: React.ReactNode;
}

export const NavigationProvider = (props: Props) => {
    return (
        <NavigationContext.Provider value={{navigate: props.navigate}}>
            { props.children }
        </NavigationContext.Provider>
    );
};
