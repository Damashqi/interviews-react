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

export default function Tree({ root }) {
  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const renderNodes = (nodes, depth = 0) => {
    return nodes.map(node => (
      <li key={node.id}>
        {node.type === "file" ? (
          <span data-testid="file">📄 {node.name}</span>
        ) : (
          <>
            <div
              data-testid="folder"
              onClick={() => toggleExpanded(node.id)}
              style={{ cursor: "pointer" }}
            >
              📁 {node.name}
            </div>
            {expandedIds.has(node.id) && node.children && (
              <ul style={{ marginLeft: 20 }}>
                {renderNodes(node.children, depth + 1)}
              </ul>
            )}
          </>
        )}
      </li>
    ));
  };

  return <ul>{renderNodes([root])}</ul>;
}
