import { useCallback, useMemo, useRef, useState } from "react";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  type Node,
  ReactFlow,
  type Edge,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import TextUpdaterNode from "../CustomNodes/InputText";
import PromptNode from "../CustomNodes/PromptNode";
import ModelNode from "../CustomNodes/ModelNode";

function Flow() {
  console.log("flow render");
  const [nodes, setNodes] = useState<Array<Node>>([]);
  const [edges, setEdges] = useState<Array<Edge>>([]);
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();

  const nodeTypes = useMemo(
    () => ({
      textUpdater: TextUpdaterNode,
      promptNode: PromptNode,
      modelNode: ModelNode,
    }),
    []
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      const data = JSON.parse(event.dataTransfer.getData("json"));

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setNodes((nds) => {
        const newNode = {
          id: `${type}-${nds.filter((nd) => nd.type === type).length + 1}`,
          type,
          position,
          data,
        };
        return nds.concat(newNode);
      });
    },
    [screenToFlowPosition]
  );

  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-screen h-full" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onDragOver={onDragOver}
          onDrop={onDrop}
          fitView
        >
          <Background />
          <Controls></Controls>
        </ReactFlow>
      </div>
    </div>
  );
}

export default Flow;
