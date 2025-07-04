import { Handle, Position } from "@xyflow/react";

function PromptNode({ data }) {
  return (
    <div className="border h-16 w-40 rounded-sm border-black bg-white relative flex flex-col justify-center">
      <Handle type="target" position={Position.Left}></Handle>
      <label className="text-sm absolute bg-white -top-3 left-1 w-14 text-center">
        Prompt
      </label>
      <div className="text-xs truncate w-full h-10 bg-slate-50">
        {data.template}
      </div>

      <Handle type="source" position={Position.Right}></Handle>
    </div>
  );
}

export default PromptNode;
