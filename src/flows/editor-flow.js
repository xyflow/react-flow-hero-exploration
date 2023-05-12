// FLOW STATE ------------------------------------------------------------------

export const nodes = [
  {
    id: "editor-a",
    type: "EditorColourPicker",
    position: { x: -50, y: -100 },
    data: { value: "#ffaff3", opacity: 0 },
  },
  {
    id: "editor-b",
    type: "EditorRadio",
    position: { x: -200, y: 40 },
    data: { value: "cube", opacity: 0 },
  },
  {
    id: "editor-c",
    type: "EditorSlider",
    position: { x: -60, y: 250 },
    data: { value: 10, opacity: 0 },
  },
  {
    id: "editor-d",
    type: "EditorPreview",
    position: { x: 200, y: -100 },
    data: { opacity: 0 },
  },
];

export const edges = [
  {
    id: "editor-a->editor-d",
    source: "editor-a",
    target: "editor-d",
    targetHandle: "colour",
  },
  {
    id: "editor-b->editor-d",
    source: "editor-b",
    target: "editor-d",
    targetHandle: "shape",
  },
  {
    id: "editor-c->d",
    source: "editor-c",
    target: "editor-d",
    targetHandle: "zoom",
  },
];

// ACTIONS ---------------------------------------------------------------------

export const updateValue = (set, get) => (id, value) => {
  set({
    nodes: get().nodes.map((node) =>
      node.id === id ? { ...node, data: { ...node.data, value } } : node
    ),
  });
};

export default {
  nodes,
  edges,
  updateValue,
};
