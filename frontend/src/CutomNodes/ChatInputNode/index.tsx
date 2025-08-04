import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { Handle, Position } from "@xyflow/react";
import Tooltip from "../../components/TooltipComponent";
import { isValidConnection } from "../../utils";

export default function ChatInputNode({ data }) {
  return (
    <div className="prompt-node relative rounded-lg solid border flex justify-center align-center py-3 px-6 bg-blue-600">
      <Tooltip title="Prefix: str">
        <Handle
          type="source"
          position={Position.Left}
          id={"str|Prefix|" + data.id}
          isValidConnection={(connection) =>
            isValidConnection(data, connection)
          }
          className="!ml-1 !bg-transparent !border-solid !border-l-8 !border-y-transparent !border-y-8 !border-r-0 !rounded-none"
          style={{ borderLeftColor: "white" }}
        ></Handle>
      </Tooltip>
      <Tooltip title={"Message: str"}>
        <Handle
          type="target"
          position={Position.Right}
          id="str"
          isValidConnection={(connection) =>
            isValidConnection(data, connection)
          }
          className="!-mr-1 !bg-transparent !border-solid !border-l-8 !border-l-blue-600 !border-y-transparent !border-y-8 !border-r-0 !rounded-none"
        ></Handle>
      </Tooltip>

      <div className="flex gap-3 text-lg font-medium text-white items-center">
        <ChatBubbleBottomCenterTextIcon className="h-8 w-8 mt-1" />
        Input
      </div>
    </div>
  );
}
