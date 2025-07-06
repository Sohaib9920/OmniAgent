import { prompt } from "../data_assets/prompt";

export function Sidebar() {
  console.log("sidebar render");
  function onDragStart(
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("json", JSON.stringify(prompt));
    event.dataTransfer.effectAllowed = "move";
  }

  return (
    <div className="h-full w-48 bg-slate-200 absolute z-10 flex flex-col">
      <div
        className="w-full border border-black text-center cursor-grab"
        onDragStart={(e) => onDragStart(e, "promptNode")}
        draggable
      >
        prompt Node
      </div>
    </div>
  );
}
