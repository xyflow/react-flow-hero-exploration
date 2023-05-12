import { create } from "zustand";
import * as TWEEN from "@tweenjs/tween.js";
import * as Editor from "./flows/editor-flow";
import * as Mindmap from "./flows/mindmap-flow";
import * as Workflow from "./flows/workflow-flow";

export const MODE = {
  Editor: "Editor",
  Mindmap: "Mindmap",
  Workflow: "Workflow",
};

const defaultNodes = {
  Editor: Editor.nodes,
  Mindmap: Mindmap.nodes,
  Workflow: Workflow.nodes,
};

const defaultEdges = {
  Editor: Editor.edges,
  Mindmap: Mindmap.edges,
  Workflow: Workflow.edges,
};

export const useStore = create((set, get) => {
  const initialNodes = defaultNodes.Editor.map((node) => ({
    ...node,
    // Set the opacity to 1 while I work out how to implement transitions.
    data: { ...node.data, opacity: 1 },
  }));
  const initialEdges = defaultEdges.Editor;

  return {
    nodes: initialNodes,
    edges: initialEdges,
    currentFlow: MODE.Editor,

    // Transitioning between flows
    inTransition: false,
    tween: null,

    transition(to) {
      const nodes = defaultNodes[to].map((node) => ({
        ...node,
        // Set the opacity to 1 while I work out how to implement transitions.
        data: { ...node.data, opacity: 1 },
      }));
      const edges = defaultEdges[to];

      set({ nodes, edges });
    },

    // Individual flow defaults and actions
    Editor: {
      nodes: Editor.nodes,
      edges: Editor.edges,
      updateValue: Editor.updateValue(set, get),
    },
    Mindmap,
    Workflow,
  };
});

export default useStore;
