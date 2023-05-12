import React from "react";
import ReactDOM from "react-dom/client";
import { ReactFlowProvider } from "reactflow";
import App from "./App.jsx";
import "reactflow/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-screen h-screen font-mono flex items-center justify-center bg-gray-50">
      <div class="aspect-video w-[90vw] rounded shadow bg-white">
        <ReactFlowProvider>
          <App />
        </ReactFlowProvider>
      </div>
    </div>
  </React.StrictMode>
);
