import "@xyflow/react/dist/style.css";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./App.css";
import Header from "./components/HeaderComponent";
import { locationContext } from "./contexts/locationContext";
import Sidebar from "./components/SidebarComponent";
import ExtraSidebar from "./components/ExtraSidebarComponent";
import ErrorAlert from "./alerts/error";
import NoticeAlert from "./alerts/notice";
import SuccessAlert from "./alerts/success";
import { alertContext } from "./contexts/alertContext";
import _ from "lodash";
import { ReactFlowProvider } from "@xyflow/react";
import FlowPage from "./pages/FlowPage";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Projects", href: "/projects" },
  {
    name: "Account settings",
    href: "http://localhost:4455/.ory/kratos/public/self-service/settings/browser",
  },
  { name: "Sign out", href: "/" },
];

type AlertList = {
  type: "notice" | "error" | "success";
  data: {
    title: string;
    list?: string[];
    link?: string;
  };
  id: string;
}[];

function App() {
  console.log("App render");

  let { setAtual, setShowSideBar, setIsStackedOpen } =
    useContext(locationContext);
  let location = useLocation();
  useEffect(() => {
    setAtual(location.pathname.replace(/\/$/g, "").split("/"));
    setShowSideBar(true);
    setIsStackedOpen(true);
  }, [location.pathname, setAtual, setIsStackedOpen, setShowSideBar]);

  const {
    errorData,
    errorOpen,
    setErrorOpen,
    noticeData,
    noticeOpen,
    setNoticeOpen,
    successData,
    successOpen,
    setSuccessOpen,
  } = useContext(alertContext);

  const [alertsList, setAlertsList] = useState<AlertList>([]);

  useEffect(() => {
    if (errorOpen && errorData) {
      setErrorOpen(false);
      setAlertsList((old) => {
        let newAlertsList: AlertList = [
          ...old,
          { type: "error", data: _.cloneDeep(errorData), id: _.uniqueId() },
        ];
        return newAlertsList;
      });
    } else if (noticeOpen && noticeData) {
      setNoticeOpen(false);
      setAlertsList((old) => {
        let newAlertsList: AlertList = [
          ...old,
          { type: "notice", data: _.cloneDeep(noticeData), id: _.uniqueId() },
        ];
        return newAlertsList;
      });
    } else if (successOpen && successData) {
      setSuccessOpen(false);
      setAlertsList((old) => {
        let newAlertsList: AlertList = [
          ...old,
          { type: "success", data: _.cloneDeep(successData), id: _.uniqueId() },
        ];
        return newAlertsList;
      });
    }
  }, [errorData, errorOpen, noticeData, noticeOpen, successData, successOpen]);

  const removeAlert = (id: string) => {
    setAlertsList((prevAlertsList) =>
      prevAlertsList.filter((alert) => alert.id !== id)
    );
  };

  return (
    <div className="h-screen flex flex-col">
      <ReactFlowProvider>
        <Header userNavigation={userNavigation} user={user}></Header>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <ExtraSidebar />
          <div className="flex-1 border-t border-gray-200">
            <FlowPage />
          </div>
        </div>
        <div className="z-50 flex flex-col-reverse fixed bottom-5 left-5">
          {alertsList.map((alert) => (
            <div key={alert.id}>
              {alert.type === "error" ? (
                <ErrorAlert
                  key={alert.id}
                  title={alert.data.title}
                  list={alert.data.list}
                  id={alert.id}
                  removeAlert={removeAlert}
                />
              ) : alert.type === "notice" ? (
                <NoticeAlert
                  key={alert.id}
                  title={alert.data.title}
                  link={alert.data.link}
                  id={alert.id}
                  removeAlert={removeAlert}
                />
              ) : (
                <SuccessAlert
                  key={alert.id}
                  title={alert.data.title}
                  id={alert.id}
                  removeAlert={removeAlert}
                />
              )}
            </div>
          ))}
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
