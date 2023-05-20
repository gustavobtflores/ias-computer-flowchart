import { Handle, Position } from "reactflow";

export default function RhombusNode({ data, id, width, height }: any) {
  return (
    <div className="rhombusNode" style={{ maxHeight: height, maxWidth: width }}>
      <div className="rhombusNode-label">
        <svg viewBox="0 0 100 100" style={{ display: "block", overflow: "visible" }}>
          <path d="M0,50 L50,0 L100,50 L50,100 z" fill="#ffffff" stroke="#222222" strokeWidth="1" strokeLinecap="round"></path>
        </svg>
        <span>{data.label}</span>
      </div>
      <Handle type="target" position={Position.Top} id={`${id}.top`} />
      <Handle type="source" position={Position.Bottom} id={`${id}.bottom`} />
      <Handle type="source" position={Position.Left} id={`${id}.left`} />
      <Handle type="source" position={Position.Right} id={`${id}.right`} />
    </div>
  );
}
