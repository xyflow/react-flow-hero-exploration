import { Handle, Position } from "reactflow";

export default function MindmapNode({ id, data }) {
  return (
    <div className="rounded-full flex items-center justify-center  bg-gray-100 p-2 text-white shadow">
      <Handle
        type="target"
        position={Position.Top}
        style={{ top: "50%", opacity: 0 }}
      />

      <p className="text-xs px-2">{data.label}</p>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ bottom: "50%", opacity: 0 }}
      />
    </div>
  );
}
