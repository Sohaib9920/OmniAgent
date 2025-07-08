import { createContext, useState } from "react";
import type { alertDropdownItem } from "../alerts/alertDropDown";
import _ from "lodash";

type alertContextType = {
  errorData: { title: string; list?: Array<string> };
  setErrorData: (newState: { title: string; list?: Array<string> }) => void;
  errorOpen: boolean;
  setErrorOpen: (newState: boolean) => void;
  noticeData: { title: string; link?: string };
  setNoticeData: (newState: { title: string; link?: string }) => void;
  noticeOpen: boolean;
  setNoticeOpen: (newState: boolean) => void;
  successData: { title: string };
  setSuccessData: (newState: { title: string }) => void;
  successOpen: boolean;
  setSuccessOpen: (newState: boolean) => void;
  notificationCenter: boolean;
  setNotificationCenter: (newState: boolean) => void;
  notificationList: Array<alertDropdownItem>;
  pushNotificationList: (notification: alertDropdownItem) => void;
  clearNotificationList: () => void;
  removeFromNotificationList: (id: string) => void;
};

const initialValue = {
  errorData: { title: "", list: [] },
  setErrorData: () => {},
  errorOpen: false,
  setErrorOpen: () => {},
  noticeData: { title: "", link: "" },
  setNoticeData: () => {},
  noticeOpen: false,
  setNoticeOpen: () => {},
  successData: { title: "" },
  setSuccessData: () => {},
  successOpen: false,
  setSuccessOpen: () => {},
  notificationCenter: false,
  setNotificationCenter: () => {},
  notificationList: [],
  pushNotificationList: () => {},
  clearNotificationList: () => {},
  removeFromNotificationList: () => {},
};

export const alertContext = createContext<alertContextType>(initialValue);

const initialAlerts: Array<alertDropdownItem> = [
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

export function AlertProvider({ children }) {
  console.log("AlertProvier render");
  const [errorData, setErrorDataState] = useState<{
    title: string;
    list?: Array<string>;
  }>({ title: "", list: [] });
  const [errorOpen, setErrorOpen] = useState(false);
  const [noticeData, setNoticeDataState] = useState<{
    title: string;
    link?: string;
  }>({ title: "", link: "" });
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [successData, setSuccessDataState] = useState<{ title: string }>({
    title: "",
  });
  const [successOpen, setSuccessOpen] = useState(false);
  const [notificationCenter, setNotificationCenter] = useState(false);
  const [notificationList, setNotificationList] =
    useState<Array<alertDropdownItem>>(initialAlerts);
  const pushNotificationList = (notification: alertDropdownItem) => {
    setNotificationList((old) => [notification, ...old]);
  };
  function setErrorData(newState: { title: string; list?: Array<string> }) {
    setErrorDataState(newState);
    setErrorOpen(true);
    if (newState.title) {
      setNotificationCenter(true);
      pushNotificationList({
        type: "error",
        title: newState.title,
        list: newState.list,
        id: _.uniqueId(),
      });
    }
  }
  function setNoticeData(newState: { title: string; link?: string }) {
    setNoticeDataState(newState);
    setNoticeOpen(true);
    if (newState.title) {
      setNotificationCenter(true);
      pushNotificationList({
        type: "notice",
        title: newState.title,
        link: newState.link,
        id: _.uniqueId(),
      });
    }
  }
  function setSuccessData(newState: { title: string }) {
    setSuccessDataState(newState);
    setSuccessOpen(true);
    if (newState.title) {
      setNotificationCenter(true);
      pushNotificationList({
        type: "success",
        title: newState.title,
        id: _.uniqueId(),
      });
    }
  }
  function clearNotificationList() {
    setNotificationList([]);
  }
  function removeFromNotificationList(index: string) {
    setNotificationList((prevAlertsList) =>
      prevAlertsList.filter((alert) => alert.id !== index)
    );
  }
  return (
    <alertContext.Provider
      value={{
        removeFromNotificationList,
        clearNotificationList,
        notificationList,
        pushNotificationList,
        setNotificationCenter,
        notificationCenter,
        errorData,
        setErrorData,
        errorOpen,
        setErrorOpen,
        noticeData,
        setNoticeData,
        noticeOpen,
        setNoticeOpen,
        successData,
        setSuccessData,
        successOpen,
        setSuccessOpen,
      }}
    >
      {children}
    </alertContext.Provider>
  );
}
