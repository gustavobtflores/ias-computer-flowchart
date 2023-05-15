"use client";

import { useState, useCallback, use, useEffect, ChangeEvent } from "react";
import ReactFlow, {
  OnNodesChange,
  applyNodeChanges,
  OnEdgesChange,
  applyEdgeChanges,
  MarkerType,
  Background,
  Controls,
  Node,
  Edge,
  Panel,
  ReactFlowInstance,
  addEdge,
  Connection,
  Position,
} from "reactflow";
import RhombusNode from "./RhombusNode";
import "reactflow/dist/style.css";
import "../styles.css";
import { initialEdges } from "@/data/initialData";
import axios from "axios";
import assign from "../helpers/assign";
import DevControls from "./DevControls";

const nodeTypes = {
  rhombusNode: RhombusNode,
};

interface FlowchartProps {
  initialNodes?: Node[];
}

interface NestedObject {
  [key: string]: any;
}

const isNumber = (value: string) => /^-?\d+(?:\.\d+)?$/.test(value);

export default function Flowchart({ initialNodes = [] }: FlowchartProps) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  console.log(nodes);

  const onNodesChange: OnNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);
  const onEdgesChange: OnEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);
  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), []);

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      axios.post("/api", flow.nodes);
    }
  }, [rfInstance]);

  const updateSelectedNode = () => {
    const node = nodes.find((node) => node.selected);

    if (node) {
      setSelectedNode(node);
    }

    console.log(node);
  };

  const getPropertyPath = (obj: NestedObject, prop: string): string | null => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key === prop) {
          return prop;
        } else if (typeof obj[key] === "object") {
          let result = getPropertyPath(obj[key], prop);
          if (result) {
            return `${key}.${result}`;
          }
        }
      }
    }
    return null;
  };

  function handleNodeChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    if (!selectedNode) return;

    const name = getPropertyPath(selectedNode, event.target.id);
    const node = { ...selectedNode };

    assign(node, name, isNumber(value) ? Number(value) : value);
    const nodeIndex = nodes.findIndex((node) => node.selected);
    const newNodes = [...nodes];
    newNodes[nodeIndex] = node;

    console.log(newNodes);
    setNodes(newNodes);
  }

  function newNode(id: string) {
    const newNode = {
      id,
      data: { label: "New Node" },
      position: { x: -500, y: 0 },
      targetPosition: Position.Left,
    };
    setNodes((nodes) => [...nodes, newNode]);
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={{
          type: "step",
          labelShowBg: true,
          labelBgStyle: { background: "#000000" },
          style: { stroke: "#1f1f1f" },
          markerEnd: { type: MarkerType.ArrowClosed, color: "#1f1f1f", width: 16, height: 16 },
        }}
        onInit={setRfInstance}
        onConnect={onConnect}
        onNodeClick={updateSelectedNode}
        maxZoom={3}
      >
        {process.env.NODE_ENV === "development" && (
          <>
            <DevControls onSave={onSave} newNode={newNode} />
            {selectedNode && (
              <Panel position="top-left">
                <div style={{ background: "#e1e1e1", padding: "16px", borderRadius: "8px", display: "flex", flexDirection: "column" }}>
                  {Object.entries(selectedNode).map(([key, value]) => (
                    <>
                      {typeof value === "object" ? (
                        Object.entries(value).map(([k, v]) => (
                          <>
                            <label htmlFor={k}>{k}</label>
                            <input key={k} id={k} type="text" placeholder={String(v)} onChange={handleNodeChange} />
                          </>
                        ))
                      ) : (
                        <>
                          <label htmlFor={key}>{key}</label>
                          <input id={key} type="text" defaultValue={value} onChange={handleNodeChange} />
                        </>
                      )}
                    </>
                  ))}
                </div>
              </Panel>
            )}
          </>
        )}

        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
