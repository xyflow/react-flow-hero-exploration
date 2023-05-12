import { EdgeLabelRenderer, getSmoothStepPath } from "reactflow";

export default function WorkflowLabelledEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path id={id} className="react-flow__edge-path" d={edgePath} />
      <EdgeLabelRenderer>
        <div
          className="nodrag nopan absolute bg-yellow-400 text-yellow-900 rounded px-2 py-1 text-xs font-bold"
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
        >
          {data.label}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
