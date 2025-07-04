import { useCallback, useMemo, useState } from "react";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  type Node,
  ReactFlow,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import TextUpdaterNode from "../CustomNodes/InputText";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "hello" } },
  { id: "2", position: { x: 100, y: 100 }, data: { label: "world" } },
  {
    id: "text-node1",
    position: { x: 50, y: 50 },
    data: { value: 123 },
    type: "textUpdater",
  },
];

const initialEdges = [];

function Flow() {
  const [nodes, setNodes] = useState<Array<Node>>(initialNodes);
  const [edges, setEdges] = useState<Array<Edge>>(initialEdges);
  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

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

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}

export default Flow;
