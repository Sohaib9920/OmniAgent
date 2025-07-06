import "./App.css";
import PopUpProvider from "./context/popUpContext";
import Flow from "./flow";
import { ReactFlowProvider } from "@xyflow/react";

function App() {
  return (
    <PopUpProvider>
      <div className="w-screen h-screen">
        <ReactFlowProvider>
          <Flow></Flow>
        </ReactFlowProvider>
      </div>
    </PopUpProvider>
  );
}

export default App;
