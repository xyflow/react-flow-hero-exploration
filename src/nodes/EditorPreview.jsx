import { Position, Handle } from "reactflow";

export default function EditorPreview({ id, data }) {
  return (
    <div
      style={{ opacity: data.opacity }}
      className="bg-white py-2 shadow rounded space-y-2"
    >
      <div className="px-2 border-b">
        <span>output</span>
      </div>

      <div className="relative px-2">
        <Handle
          className="-mt-4"
          type="target"
          id="colour"
          position={Position.Left}
        />
        <Handle type="target" id="shape" position={Position.Left} />
        <Handle
          className="mt-4"
          type="target"
          id="zoom"
          position={Position.Left}
        />
        <div className="w-64 h-64 bg-[#ffaff3]" />
      </div>
    </div>
  );
}
