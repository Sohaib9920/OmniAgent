import React, { createContext, useState } from "react";

type locationContextType = {
  atual: Array<string>;
  setAtual: (newState: Array<string>) => void;
  showSideBar: boolean;
  setShowSideBar: (newState: boolean) => void;
  isStackedOpen: boolean;
  setIsStackedOpen: (newState: boolean) => void;
};

const initialValue = {
  atual: window.location.pathname.replace(/\/$/g, "").split("/"),
  setAtual: () => {},
  showSideBar: true,
  setShowSideBar: () => {},
  isStackedOpen: false,
  setIsStackedOpen: () => {},
};

export const locationContext = createContext<locationContextType>(initialValue);

export function LocationProvider({
  children,
}: {
  children: React.JSX.Element;
}) {
  console.log("LocationProvider render");
  const [atual, setAtual] = useState(initialValue.atual);
  const [showSideBar, setShowSideBar] = useState(initialValue.showSideBar);
  const [isStackedOpen, setIsStackedOpen] = useState(
    initialValue.isStackedOpen
  );

  return (
    <locationContext.Provider
      value={{
        atual,
        setAtual,
        showSideBar,
        setShowSideBar,
        isStackedOpen,
        setIsStackedOpen,
      }}
    >
      {children}
    </locationContext.Provider>
  );
}
