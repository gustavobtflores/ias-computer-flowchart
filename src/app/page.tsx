"use client";

import RhombusNode from "@/components/RhombusNode";
import ReactFlow, { Background, Controls, MarkerType } from "reactflow";
import "reactflow/dist/style.css";
import "../styles.css";

const edges = [
  {
    id: "start-nextinstruction",
    source: "start",
    target: "nextinstruction",
    label: "",
  },
  {
    id: "nextinstruction-yes",
    source: "nextinstruction",
    target: "yes",
    label: "Sim",
    sourceHandle: "nextinstruction.left",
    targetHandle: "yes.right",
  },
  {
    id: "nextinstruction-pcinc",
    source: "nextinstruction",
    target: "pcinc",
    sourceHandle: "nextinstruction.bottom",
    targetHandle: "pcinc.right",
  },
  {
    id: "yes-pcinc",
    source: "yes",
    target: "pcinc",
    sourceHandle: "nextinstruction.bottom",
  },
  {
    id: "pcinc-decode",
    source: "pcinc",
    target: "decode",
  },
  {
    id: "decode-addmx",
    source: "decode",
    target: "addmx",
    sourceHandle: "decode.bottom",
  },
  {
    id: "decode-submx",
    source: "decode",
    target: "submx",
  },
  {
    id: "decode-mulmx",
    source: "decode",
    target: "mulmx",
  },
  {
    id: "decode-divmx",
    source: "decode",
    target: "divmx",
  },
  {
    id: "decode-addmodmx",
    source: "decode",
    target: "addmodmx",
  },
  {
    id: "decode-submodmx",
    source: "decode",
    target: "submodmx",
  },
  {
    id: "decode-lsh",
    source: "decode",
    target: "lsh",
  },
  {
    id: "decode-rsh",
    source: "decode",
    target: "rsh",
  },
];

const nodes = [
  { id: "start", position: { x: 0, y: 0 }, data: { label: "Início" } },
  { id: "nextinstruction", position: { x: 12.5, y: 100 }, data: { label: "A próxima instrução está no IR?" }, type: "rhombusNode" },
  { id: "yes", position: { x: -300, y: 137.5 }, data: { label: "IR <-- IBR(0:7)\nMAR <-- IBR(8:19)" }, targetPosition: "right" },
  { id: "pcinc", position: { x: 0, y: 400 }, data: { label: "PC <-- PC + 1" } },
  { id: "decode", position: { x: 0, y: 600 }, data: { label: "Decodificar instrução" } },
  { id: "addmx", position: { x: -600 + 12.5, y: 800 }, data: { label: "ADD M(X)\n(00000101)" }, type: "rhombusNode" },
  { id: "addmodmx", position: { x: -400 + 12.5, y: 800 }, data: { label: "ADD |M(X)|\n(00000101)" }, type: "rhombusNode" },
  { id: "submx", position: { x: -200 + 12.5, y: 800 }, data: { label: "SUB M(X)\n(00000110)" }, type: "rhombusNode" },
  { id: "submodmx", position: { x: -0 + 12.5, y: 800 }, data: { label: "SUB |M(X)|\n(00000110)" }, type: "rhombusNode" },
  { id: "mulmx", position: { x: 200 + 12.5, y: 800 }, data: { label: "MUL M(X)\n(00000110)" }, type: "rhombusNode" },
  { id: "divmx", position: { x: 400 + 12.5, y: 800 }, data: { label: "DIV M(X)\n(00000110)" }, type: "rhombusNode" },
  { id: "lsh", position: { x: 600 + 12.5, y: 800 }, data: { label: "LSH\n(00000110)" }, type: "rhombusNode" },
  { id: "rsh", position: { x: 800 + 12.5, y: 800 }, data: { label: "RSH\n(00000110)" }, type: "rhombusNode" },
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
