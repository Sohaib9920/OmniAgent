import {
  ArrowUpRightIcon,
  PlayIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Handle, Position } from "@xyflow/react";
import Input from "../../components/inputComponent";
import { Dropdown } from "../../components/dropdownComponent";
import { nodeColors, nodeIcons } from "../../utils";

export default function GenericNode({ data }) {
  console.log("Generic Node render");
  const Icon = nodeIcons[data.type];
  return (
    <div className="generic-node relative bg-white w-96 rounded-lg solid border flex flex-col justify-center">
      <Handle
        type="source"
        position={Position.Left}
        id="b"
        className="!bg-gray-400 !w-3 !h-3 -ml-0.5"
      ></Handle>

      <div className="w-full flex items-center justify-between p-4 bg-gray-50 border-b rounded-t-lg">
        <div className="flex items-center gap-4 text-lg">
          <Icon
            className="w-10 h-10 p-1 text-white rounded"
            style={{ background: nodeColors[data.type] }}
          />
          {data.name}
        </div>
        <ArrowUpRightIcon className="w-4 h-4" />
      </div>

      <div className="w-full p-5 h-full">
        <div className="w-full text-gray-500 text-sm truncate">
          {data.node.description}
        </div>
        {Object.entries(data.node.template).map(([k, v], idx) => (
          <div key={idx} className="w-full mt-5">
            {v.type === "dropdown" ? (
              <Dropdown
                title={v.title}
                value={v.options[0]}
                options={v.options}
                onSelect={() => {}}
              />
            ) : v.type === "str" ? (
              <Input title={k} placeholder="" onChange={() => {}} />
            ) : (
              <></>
            )}
          </div>
        ))}
        <div className="w-full mt-5"></div>
      </div>

      <div className="flex w-full justify-between items-center bg-gray-50 gap-2 border-t text-gray-600 p-4 text-sm rounded-b-lg">
        <button onClick={data.onDelete}>
          <TrashIcon className="w-6 h-6"></TrashIcon>
        </button>

        <button onClick={data.onRun}>
          <PlayIcon className="w-6 h-6"></PlayIcon>
        </button>
      </div>

      <Handle
        type="target"
        position={Position.Right}
        id="b"
        className=" !w-3 !h-3 -mr-0.5"
        style={{ background: nodeColors[data.type] }}
      ></Handle>
    </div>
  );
}
