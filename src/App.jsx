import { useEffect } from "react";
import { ReactFlow, Background, Panel, useReactFlow } from "reactflow";
import { useStore, MODE } from "./store";
// CUSTOM NODES
import EditorColourPicker from "./nodes/EditorColourPicker";
import EditorPreview from "./nodes/EditorPreview";
import EditorRadio from "./nodes/EditorRadio";
import EditorSlider from "./nodes/EditorSlider";
import MindmapNode from "./nodes/MindmapNode";
import WorkflowCard from "./nodes/WorkflowCard";
// CUSTOM EDGES
import WorkflowLabelledEdge from "./edges/WorkflowLabelledEdge";

const nodeTypes = {
  [EditorColourPicker.name]: EditorColourPicker,
  [EditorPreview.name]: EditorPreview,
  [EditorRadio.name]: EditorRadio,
  [EditorSlider.name]: EditorSlider,
  [MindmapNode.name]: MindmapNode,
  [WorkflowCard.name]: WorkflowCard,
};

const edgeTypes = {
  [WorkflowLabelledEdge.name]: WorkflowLabelledEdge,
};

export default function App() {
  const { nodes, edges, transition } = useStore((store) => store);
  const { fitView } = useReactFlow();

  useEffect(() => {
    window.requestAnimationFrame(() => fitView({ padding: 0.1 }));
  }, [nodes]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView
      fitViewOptions={{ padding: 0.1 }}
    >
      <Background />
      <Panel position="top-left">
        <div className="flex gap-2">
          <button
            className="rounded shadow px-4 py-1 bg-blue-500 text-white"
            onClick={() => transition(MODE.Editor)}
          >
            editor
          </button>
          <button
            className="rounded shadow px-4 py-1 bg-blue-500 text-white"
            onClick={() => transition(MODE.Mindmap)}
          >
            Mindmap
          </button>
          <button
            className="rounded shadow px-4 py-1 bg-blue-500 text-white"
            onClick={() => transition(MODE.Workflow)}
          >
            Workflow
          </button>
        </div>
      </Panel>
    </ReactFlow>
  );
}
