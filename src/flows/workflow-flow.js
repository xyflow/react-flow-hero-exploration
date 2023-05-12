// FLOW STATE ------------------------------------------------------------------

export const nodes = [
  {
    id: "workflow-a",
    type: "WorkflowCard",
    position: { x: 0, y: -200 },
    data: {
      title: "Yes/No Branch",
      label: "Segment is Customers who Purchased.",
      opacity: 0,
    },
  },
  {
    id: "workflow-b",
    type: "WorkflowCard",
    position: { x: -200, y: 0 },
    data: {
      title: "Push Notification",
      label: "💎 10% discount for our VIP customers 💎",
      opacity: 0,
    },
  },
  {
    id: "workflow-c",
    type: "WorkflowCard",
    position: { x: 200, y: 0 },
    data: {
      title: "Push Notification",
      label: "🎉 20% discount for first-time customers 🎉",
      opacity: 0,
    },
  },
  {
    id: "workflow-d",
    type: "WorkflowCard",
    position: { x: 0, y: 200 },
    data: {
      title: "Wait 15 minutes",
      opacity: 0,
    },
  },
];

export const edges = [
  {
    id: "workflow-a->workflow-b",
    type: "WorkflowLabelledEdge",
    source: "workflow-a",
    target: "workflow-b",
    animated: true,
    data: { label: "Yes" },
  },
  {
    id: "workflow-a->workflow-c",
    type: "WorkflowLabelledEdge",
    source: "workflow-a",
    target: "workflow-c",
    data: { label: "No" },
  },
  {
    id: "workflow-b->workflow-d",
    source: "workflow-b",
    target: "workflow-d",
    type: "smoothstep",
    animated: true,
  },
  {
    id: "workflow-c->workflow-d",
    source: "workflow-c",
    target: "workflow-d",
    type: "smoothstep",
  },
];
