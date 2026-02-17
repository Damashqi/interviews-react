import React from "react";
import TreeNode from "./TreeNode";

export default function FileTree({ data }) {
  return (
    <ul>
      <TreeNode node={data} />
    </ul>
  );
}
