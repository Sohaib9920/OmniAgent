import React, { createContext, useState } from "react";

type locationContextType = {
  atual: Array<string>;
  setAtual: (newState: Array<string>) => void;
};

const initialValue = {
  atual: window.location.pathname.replace(/\/$/g, "").split("/"),
  setAtual: () => {},
};

export const locationContext = createContext<locationContextType>(initialValue);

export function LocationProvider({
  children,
}: {
  children: React.JSX.Element;
}) {
  console.log("LocationProvider render");
  const [atual, setAtual] = useState(initialValue.atual);

  return (
    <locationContext.Provider value={{ atual, setAtual }}>
      {children}
    </locationContext.Provider>
  );
}
