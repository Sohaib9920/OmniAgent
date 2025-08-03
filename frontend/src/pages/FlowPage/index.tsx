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
import connection from "./components/connection";
import InputNode from "../../CutomNodes/InputNode";
import ChatInputNode from "../../CutomNodes/ChatInputNode";
import ChatOutputNode from "../../CutomNodes/ChatOutputNode";
import BooleanNode from "../../CutomNodes/BooleanNode";
import { alertContext } from "../../contexts/alertContext";

const nodeTypes = {
  genericNode: GenericNode,
  inputNode: InputNode,
  chatInputNode: ChatInputNode,
  chatOutputNode: ChatOutputNode,
  booleanNode: BooleanNode,
};

function FlowPage() {
  console.log("flow render");
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>(null);
  const { setExtraComponent, setExtraNavigation } = useContext(locationContext);
  const { setErrorData } = useContext(alertContext);

  let id = 0;
  const getId = () => `dndnode_${id++}`;

  useEffect(() => {
    setExtraComponent(<ExtraComponent />);
    setExtraNavigation({ title: "Nodes" });
  }, [setExtraComponent, setExtraNavigation]);

  const onConnect = useCallback(
    (params: any) => {
      // console.log(params);
      // console.log(reactFlowInstance.getNodes());
      // console.log(getConnectedNodes(params, reactFlowInstance.getNodes()));
      setEdges((eds) => addEdge(params, eds));
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("json"));

      if (
        data.name !== "chatInput" ||
        (data.name === "chatInput" &&
          !reactFlowInstance.getNodes().some((n) => n.type === "chatInputNode"))
      ) {
        const position = reactFlowInstance.screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });

        let newId = getId();
        setNodes((nds) => {
          const newNode = {
            id: newId,
            type:
              data.name === "str"
                ? "inputNode"
                : data.name === "chatInput"
                ? "chatInputNode"
                : data.name === "chatOutput"
                ? "chatOutputNode"
                : data.name === "bool"
                ? "booleanNode"
                : "genericNode",
            position,
            data: {
              ...data,
              id: newId,
              input: "",
              enabled: false,
              reactFlowInstance,
              onDelete: () => {
                setNodes(
                  reactFlowInstance.getNodes().filter((n) => n.id !== newId)
                );
              },
            },
          };
          return nds.concat(newNode);
        });
      } else {
        setErrorData({
          title: "Error creating node",
          list: ["There can't be more than one chat input."],
        });
      }
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
        connectionLineComponent={connection}
        fitView
      >
        <Background />
        <Controls></Controls>
      </ReactFlow>
      <Chat reactFlowInstance={reactFlowInstance} />
    </div>
  );
}

export default FlowPage;
