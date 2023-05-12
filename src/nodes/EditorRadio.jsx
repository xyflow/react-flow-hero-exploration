import { Position, Handle } from "reactflow";
import useStore from "../store";

export default function EditorRadio({ id, data }) {
  const updateValue = useStore((store) => store.Editor.updateValue);

  return (
    <div
      style={{ opacity: data.opacity }}
      className="bg-white py-2 shadow rounded space-y-2"
    >
      <div className="px-2 border-b">
        <span>zoom level</span>
      </div>

      <div className="relative px-2 space-x-2">
        <label className="inline-flex items-center">
          <input
            className="nodrag"
            type="radio"
            name="shape"
            value="cube"
            onChange={(e) => updateValue(id, e.target.value)}
            checked={data.value === "cube"}
          />
          <span className="ml-1">cube</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="nodrag"
            type="radio"
            name="shape"
            value="pyramid"
            onChange={(e) => updateValue(id, e.target.value)}
            checked={data.value === "pyramid"}
          />
          <span className="ml-1">pyramid</span>
        </label>
        <Handle type="source" position={Position.Right} />
      </div>
    </div>
  );
}
