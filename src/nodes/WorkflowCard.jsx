import { Position, Handle } from "reactflow";

export default function WorkflowCard({ id, data }) {
  return (
    <div
      style={{ opacity: data.opacity }}
      className="bg-gray-50 py-2 shadow rounded space-y-2"
    >
      <Handle type="target" position={Position.Top} />

      <div className="px-2 text-gray-400 font-bold flex items-center">
        <span className="inline-block w-4 h-4 bg-blue-500 rounded mr-1" />
        <span>{data.title}</span>
      </div>

      {data.label && <p className="px-2 text-sm text-gray-800">{data.label}</p>}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
