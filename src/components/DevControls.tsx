import { useState } from "react";
import { Panel } from "reactflow";

interface DevControlsProps {
  onSave: () => void;
  newNode: (id: string) => void;
}

export default function DevControls({ onSave, newNode }: DevControlsProps) {
  const [id, setId] = useState("");

  const handleNewNode = () => {
    if (id) {
      newNode(id);
    }
  };

  return (
    <Panel position="top-right">
      <input type="text" placeholder="id" onChange={(event) => setId(event.target.value)} />
      <button onClick={onSave}>save</button>
      <button onClick={handleNewNode}>new node</button>
    </Panel>
  );
}
