import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  addEdge,
  Background,
  Controls,
  type Node,
  ReactFlow,
  type Edge,
  useNodesState,
  useEdgesState,
  type ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ModelNode from "../../CutomNodes/ModelNode";
import { ExtraComponent } from "./components/extraSidebarComponent";
import { locationContext } from "../../contexts/locationContext";
import PromptNode from "../../CutomNodes/PromptNode";
import ChainNode from "../../CutomNodes/ChainNode";
import AgentNode from "../../CutomNodes/AgentNode";
import MemoryNode from "../../CutomNodes/MemoryNode";
import ValidatorNode from "../../CutomNodes/ValidatorNode";

const nodeTypes = {
  promptNode: PromptNode,
  modelNode: ModelNode,
  chainNode: ChainNode,
  agentNode: AgentNode,
  validatorNode: ValidatorNode,
  memoryNode: MemoryNode,
};

function FlowPage() {
  console.log("flow render");
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>(null);
  const { setExtraComponent, setExtraNavigation } = useContext(locationContext);

  useEffect(() => {
    setExtraComponent(ExtraComponent);
    setExtraNavigation({ title: "Nodes" });
  }, []);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      const data = JSON.parse(event.dataTransfer.getData("json"));

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
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
    [reactFlowInstance]
  );

  return (
    <div className="w-full h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        onDragOver={onDragOver}
        onDrop={onDrop}
        fitView
      >
        <Background />
        <Controls></Controls>
      </ReactFlow>
    </div>
  );
}

export default FlowPage;
