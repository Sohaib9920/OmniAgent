import { useState } from "react";
import AlertDropDown from "./alerts/alertDropDown";
import "./App.css";
import Header from "./components/HeaderComponent";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="flex grow-0 shrink basis-auto">
        <Header></Header>
      </div>
      <button onClick={() => setShow(!show)}>Open</button>
      <AlertDropDown closeFunction={() => setShow(false)} open={show} />
    </div>
  );
}

export default App;
