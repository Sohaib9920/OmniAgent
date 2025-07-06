import "./App.css";
import Flow from "./flow";
import { ReactFlowProvider } from "@xyflow/react";

function App() {
  return (
    <div className="w-screen h-screen">
      <ReactFlowProvider>
        <Flow></Flow>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
