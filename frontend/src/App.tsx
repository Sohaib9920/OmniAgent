import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import Header from "./components/HeaderComponent";
import { locationContext } from "./contexts/locationContext";
import Sidebar from "./components/SidebarComponent";
import ExtraSidebar from "./components/ExtraSidebarComponent";
import { ExtraComponent } from "./pages/FlowPage/components/extraSidebarComponent";
import Flow from "./pages/FlowPage";

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

function App() {
  console.log("App render");
  let { setAtual } = useContext(locationContext);
  let location = useLocation();
  useEffect(() => {
    setAtual(location.pathname.replace(/\/$/g, "").split("/"));
  }, [location.pathname]);
  return (
    <div className="h-screen bg-white flex flex-col">
      <Header userNavigation={userNavigation} user={user}></Header>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <ExtraSidebar></ExtraSidebar>
        <div className="flex-1 border-t border-gray-200">
          <Flow></Flow>
        </div>
      </div>
    </div>
  );
}

export default App;
