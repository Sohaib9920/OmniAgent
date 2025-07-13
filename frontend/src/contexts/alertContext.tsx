import React, { createContext, useState } from "react";
import type { alertDropdownItem } from "../alerts/alertDropDown";

type alertContextType = {
  notificationCenter: boolean;
  setNotificationCenter: (newState: boolean) => void;
  notificationList: Array<alertDropdownItem>;
  clearNotificationList: () => void;
  removeFromNotificationList: (id: string) => void;
};

const initialValue = {
  notificationCenter: false,
  setNotificationCenter: () => {},
  notificationList: [],
  clearNotificationList: () => {},
  removeFromNotificationList: () => {},
};

const initialNotificationList: alertDropdownItem[] = [
  { type: "success", title: "Settings saved successfully!", id: "success-123" },
  {
    type: "error",
    title: "Failed to upload file(s)",
    list: ["Image size too large", "Unsupported file format"],
    id: "error-456",
  },
  {
    type: "notice",
    title: "New update available!",
    link: "/settings/general/main",
    id: "notice-789",
  },
];

export const alertContext = createContext<alertContextType>(initialValue);

export function AlertProvider({ children }: { children: React.JSX.Element }) {
  console.log("AlertProvider render");
  const [notificationCenter, setNotificationCenter] = useState(false);
  const [notificationList, setNotificationList] = useState<
    Array<alertDropdownItem>
  >(initialNotificationList);

  function clearNotificationList() {
    setNotificationList([]);
  }

  function removeFromNotificationList(id: string) {
    setNotificationList((prevAlertsList) =>
      prevAlertsList.filter((alert) => alert.id !== id)
    );
  }

  return (
    <alertContext.Provider
      value={{
        notificationCenter,
        setNotificationCenter,
        notificationList,
        clearNotificationList,
        removeFromNotificationList,
      }}
    >
      {children}
    </alertContext.Provider>
  );
}
