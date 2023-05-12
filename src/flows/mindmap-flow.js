// FLOW STATE ------------------------------------------------------------------

const emojis = ["💖", "💎", "✨", "🎉"];
const emoji = () => emojis[~~(Math.random() * emojis.length)];

export const nodes = [
  {
    id: "mindmap-a",
    type: "MindmapNode",
    position: { x: 0, y: 0 },
    data: { label: emoji() },
  },
  {
    id: "mindmap-b",
    type: "MindmapNode",
    position: { x: 100, y: 75 },
    data: { label: emoji() },
  },
  {
    id: "mindmap-c",
    type: "MindmapNode",
    position: { x: -100, y: -75 },
    data: { label: emoji() },
  },
  {
    id: "mindmap-d",
    type: "MindmapNode",
    position: { x: -50, y: -175 },
    data: { label: emoji() },
  },
  {
    id: "mindmap-e",
    type: "MindmapNode",
    position: { x: 50, y: -125 },
    data: { label: emoji() },
  },
  {
    id: "mindmap-f",
    type: "MindmapNode",
    position: { x: -150, y: -125 },
    data: { label: emoji() },
  },
  {
    id: "mindmap-g",
    type: "MindmapNode",
    position: { x: -200, y: -25 },
    data: { label: emoji() },
  },
];

export const edges = [
  {
    id: "mindmap-a->mindmap-b",
    source: "mindmap-a",
    target: "mindmap-b",
    type: "straight",
  },
  {
    id: "mindmap-a->mindmap-c",
    source: "mindmap-a",
    target: "mindmap-c",
    type: "straight",
  },
  {
    id: "mindmap-c->mindmap-d",
    source: "mindmap-c",
    target: "mindmap-d",
    type: "straight",
  },
  {
    id: "mindmap-c->mindmap-e",
    source: "mindmap-c",
    target: "mindmap-e",
    type: "straight",
  },
  {
    id: "mindmap-e->mindmap-f",
    source: "mindmap-c",
    target: "mindmap-f",
    type: "straight",
  },
  {
    id: "mindmap-e->mindmap-g",
    source: "mindmap-c",
    target: "mindmap-g",
    type: "straight",
  },
];

export default { nodes, edges };
