
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("counter increments", () => {
  const { getByText } = render(<App />);
  const btn = getByText(/Count:/);
  fireEvent.click(btn);
  expect(btn.textContent).toContain("1");
});
