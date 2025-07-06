import { createContext, useState, type JSX } from "react";

export const PopUpContext = createContext({
  openPopUp: (popUpElement: JSX.Element) => {},
  closePopUp: () => {},
});

interface PopUpProviderProps {
  children: React.ReactNode;
}

const PopUpProvider = ({ children }: PopUpProviderProps) => {
  console.log("PopUpProvider render");
  const [popUpElement, setPopUpElement] = useState<JSX.Element | null>(null);

  const openPopUp = (element: JSX.Element) => {
    setPopUpElement(element);
  };

  const closePopUp = () => {
    setPopUpElement(null);
  };

  return (
    <PopUpContext.Provider value={{ openPopUp, closePopUp }}>
      {children}
      {popUpElement}
    </PopUpContext.Provider>
  );
};

export default PopUpProvider;
