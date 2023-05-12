import { Position, Handle } from "reactflow";
import { useStore } from "../store";

export default function EditorColourPicker({ id, data }) {
  const updateValue = useStore((store) => store.Editor.updateValue);

  return (
    <div
      style={{ opacity: data.opacity }}
      className="bg-white py-2 shadow rounded space-y-2"
    >
      <div className="px-2 border-b">
        <span>colour</span>
      </div>

      <div className="relative px-2">
        <input
          className="nodrag"
          type="color"
          value={data.value}
          onChange={(e) => updateValue(id, e.target.value)}
        />
        <Handle type="source" position={Position.Right} />
      </div>
    </div>
  );
}
