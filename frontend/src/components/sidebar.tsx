import { llm_chain } from "../data_assets/agent";
import { prompt } from "../data_assets/prompt";

export function Sidebar() {
  console.log("sidebar render");
  function onDragStart(
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
    let json;
    if (nodeType === "promptNode") {
      json = JSON.stringify(prompt);
    }
    if (nodeType === "modelNode") {
      json = JSON.stringify(llm_chain);
    }
    event.dataTransfer.setData("json", json);
  }

  return (
    <div className="h-full w-48 bg-slate-200 flex flex-col">
      <div
        className="w-full border border-black text-center cursor-grab"
        onDragStart={(e) => onDragStart(e, "promptNode")}
        draggable
      >
        prompt Node
      </div>
      <div
        className="w-full border border-black text-center cursor-grab"
        onDragStart={(e) => onDragStart(e, "modelNode")}
        draggable
      >
        model Node
      </div>
    </div>
  );
}
