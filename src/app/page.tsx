"use client";

import RhombusNode from "@/components/RhombusNode";
import ReactFlow, { Background, Controls, MarkerType } from "reactflow";
import "reactflow/dist/style.css";
import "../styles.css";

const edges = [
  {
    id: "1-2",
    source: "start",
    target: "nextinstruction",
    label: "",
  },
  {
    id: "2-3",
    source: "nextinstruction",
    target: "yes",
    label: "Sim",
    sourceHandle: "nextinstruction.left",
    targetHandle: "yes.right",
  },
  {
    id: "2-5",
    source: "nextinstruction",
    target: "pcinc",
    sourceHandle: "nextinstruction.bottom",
    targetHandle: "yes.right",
  },
  {
    id: "2-4",
    source: "yes",
    target: "pcinc",
    sourceHandle: "nextinstruction.bottom",
  },
  {
    id: "4-5",
    source: "pcinc",
    target: "decode",
  },
  {
    id: "5-6",
    source: "decode",
    target: "acinc",
    type: "step",
    sourceHandle: "decode.bottom",
  },
];

const nodes = [
  {
    id: "start",
    position: { x: 0, y: 0 },
    data: { label: "Início" },
  },
  {
    id: "nextinstruction",
    position: { x: 12.5, y: 100 },
    data: { label: "A próxima instrução está no IR?" },
    type: "rhombusNode",
  },
  { id: "yes", position: { x: -300, y: 137.5 }, data: { label: "IR <-- IBR(0:7)\nMAR <-- IBR(8:19)" } },
  { id: "pcinc", position: { x: 0, y: 400 }, data: { label: "PC <-- PC + 1" } },
  { id: "decode", position: { x: 0, y: 600 }, data: { label: "Decodificar instrução" } },
  { id: "acinc", position: { x: -200, y: 800 }, data: { label: "ADD M(X)\n(00000101)" }, type: "rhombusNode" },
];

const nodeTypes = {
  rhombusNode: RhombusNode,
};

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow fitView nodes={nodes} edges={edges} nodeTypes={nodeTypes} defaultEdgeOptions={{ type: "step", markerEnd: { type: MarkerType.ArrowClosed } }}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
