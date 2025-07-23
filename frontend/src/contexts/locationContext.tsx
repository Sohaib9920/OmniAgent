import React, { createContext, useState } from "react";

type locationContextType = {
  atual: Array<string>;
  setAtual: (newState: Array<string>) => void;
  showSideBar: boolean;
  setShowSideBar: (newState: boolean) => void;
  isStackedOpen: boolean;
  setIsStackedOpen: (newState: boolean) => void;
  extraNavigation: {
    title: string;
    options?: Array<{
      name: string;
      href: string;
      icon: any;
      children?: Array<any>;
    }>;
  };
  setExtraNavigation: (newState: {
    title: string;
    options?: Array<{
      name: string;
      href: string;
      icon: any;
      children?: Array<any>;
    }>;
  }) => void;
  extraComponent: React.JSX.Element;
  setExtraComponent: (newState: React.JSX.Element) => void;
};

const initialValue = {
  atual: window.location.pathname.replace(/\/$/g, "").split("/"),
  setAtual: () => {},
  showSideBar: true,
  setShowSideBar: () => {},
  isStackedOpen: false,
  setIsStackedOpen: () => {},
  extraNavigation: { title: "" },
  setExtraNavigation: () => {},
  extraComponent: <></>,
  setExtraComponent: () => {},
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
  const [extraNavigation, setExtraNavigation] = useState({ title: "" });
  const [extraComponent, setExtraComponent] = useState(<></>);

  return (
    <locationContext.Provider
      value={{
        atual,
        setAtual,
        showSideBar,
        setShowSideBar,
        isStackedOpen,
        setIsStackedOpen,
        extraNavigation,
        setExtraNavigation,
        extraComponent,
        setExtraComponent,
      }}
    >
      {children}
    </locationContext.Provider>
  );
}
