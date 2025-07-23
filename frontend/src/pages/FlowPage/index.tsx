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
import { locationContext } from "../../contexts/locationContext";
import Chat from "../../components/chatComponent";
import ExtraComponent from "./components/extraSidebarComponent";
import GenericNode from "../../CutomNodes/GenericNode";

const nodeTypes = {
  genericNode: GenericNode,
};

function FlowPage() {
  console.log("flow render");
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>(null);
  const { setExtraComponent, setExtraNavigation } = useContext(locationContext);

  let id = 0;
  const getId = () => `dndnode_${id++}`;

  useEffect(() => {
    setExtraComponent(<ExtraComponent />);
    setExtraNavigation({ title: "Nodes" });
  }, [setExtraComponent, setExtraNavigation]);

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
      const data = JSON.parse(event.dataTransfer.getData("json"));

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setNodes((nds) => {
        const newNode = {
          id: getId(),
          type: "genericNode",
          position,
          data: {
            ...data,
            onDelete: () => console.log("Deleted"),
            onRun: () => console.log("Run"),
          },
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
      <Chat />
    </div>
  );
}

export default FlowPage;
