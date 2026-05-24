import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Type from "../Type.jsx";

vi.mock("typewriter-effect", () => ({
  default: ({ options }) => (
    <div data-testid="typewriter">
      {options.strings.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  ),
}));

describe("Type", () => {
  it("renders the typewriter component", () => {
    render(<Type />);
    expect(screen.getByTestId("typewriter")).toBeInTheDocument();
  });

  it("contains the expected role strings", () => {
    render(<Type />);
    expect(screen.getByText("Software Developer")).toBeInTheDocument();
    expect(screen.getByText("Freelancer")).toBeInTheDocument();
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
    expect(screen.getByText("Open Source Contributor")).toBeInTheDocument();
  });
});
