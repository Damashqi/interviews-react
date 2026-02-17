import React, { useState } from "react";

export default function TreeNode({ node }) {
  const [expanded, setExpanded] = useState(false);

  if (node.type === "file") {
    return (
      <li data-testid="file">
        📄 {node.name}
      </li>
    );
  }

  return (
    <li>
      <div
        data-testid="folder"
        onClick={() => setExpanded(!expanded)}
        style={{ cursor: "pointer" }}
      >
        📁 {node.name}
      </div>

      {expanded && (
        <ul style={{ marginLeft: 20 }}>
          {node.children.map(child => (
            <TreeNode key={child.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
