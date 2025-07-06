import { Handle, Position } from "@xyflow/react";
import { useContext } from "react";
import { PopUpContext } from "../../context/popUpContext";

function ModelNode({ data }) {
  const { openPopUp } = useContext(PopUpContext);
  return (
    <div
      onClick={() =>
        openPopUp(<div className="absolute top-1/2 left-1/2">test</div>)
      }
      className="border h-16 w-40 rounded-sm border-black bg-white relative flex flex-col justify-center"
    >
      <Handle type="source" position={Position.Left}></Handle>
      <label className="text-sm absolute bg-white -top-3 left-1 w-14 text-center cursor-grab">
        Prompt
      </label>
      <div className="text-xs w-full text-center h-min">
        {data.llm.model_name}
      </div>

      <Handle type="target" position={Position.Right}></Handle>
    </div>
  );
}

export default ModelNode;
