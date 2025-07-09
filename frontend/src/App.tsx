import { useState } from "react";
import AlertDropDown from "./alerts/alertDropDown";
import "./App.css";
import Header from "./components/HeaderComponent";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="flex grow-0 shrink basis-auto">
        <Header
          user={{
            imageUrl:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
          }}
          userNavigation={[
            { name: "Your Profile", href: "/profile" },
            { name: "Settings", href: "/settings" },
            { name: "Sign out", href: "/logout" },
            { name: "Help & Support", href: "http://example.com/help" }, // Example of an external link
          ]}
        ></Header>
      </div>
    </div>
  );
}

export default App;
