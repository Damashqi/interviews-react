import { render, screen, fireEvent } from "@testing-library/react";
import FileTree from "./FileTree";
import { treeData } from "./treeData";

describe("FileTree", () => {
  test("renders root folder", () => {
    render(<FileTree data={treeData} />);
    expect(screen.getByText("📁 root")).toBeInTheDocument();
  });

  test("does not show children before click", () => {
    render(<FileTree data={treeData} />);
    expect(screen.queryByText("📁 src")).toBeNull();
  });

  test("expands folder on click", () => {
    render(<FileTree data={treeData} />);

    fireEvent.click(screen.getByText("📁 root"));

    expect(screen.getByText("📁 src")).toBeInTheDocument();
    expect(screen.getByText("📄 README.md")).toBeInTheDocument();
  });

  test("renders nested files after expanding", () => {
    render(<FileTree data={treeData} />);

    fireEvent.click(screen.getByText("📁 root"));
    fireEvent.click(screen.getByText("📁 src"));

    expect(screen.getByText("📄 App.jsx")).toBeInTheDocument();
  });
});
