import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeDetails from "../HomeDetails.jsx";

vi.mock("react-parallax-tilt", () => ({
  default: ({ children }) => <div data-testid="tilt">{children}</div>,
}));

vi.mock("../../../assets/avatar.svg", () => ({ default: "avatar.svg" }));

describe("HomeDetails", () => {
  it("renders the intro heading", () => {
    render(<HomeDetails />);
    expect(screen.getByText(/introduce/i)).toBeInTheDocument();
  });

  it("renders the avatar image with correct alt text", () => {
    render(<HomeDetails />);
    expect(screen.getByAltText("avatar")).toBeInTheDocument();
  });

  it("highlights key technologies in the description", () => {
    render(<HomeDetails />);
    // React.js and Node.js appear in multiple text nodes — use getAllByText
    expect(screen.getAllByText(/React\.js/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Node\.js/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Next\.js/i).length).toBeGreaterThan(0);
  });

  it("mentions web applications and software solutions as interest areas", () => {
    render(<HomeDetails />);
    expect(screen.getByText(/Web Applications/i)).toBeInTheDocument();
    expect(screen.getByText(/Software Solutions/i)).toBeInTheDocument();
  });

  it("wraps the avatar in the tilt component", () => {
    render(<HomeDetails />);
    const tilt = screen.getByTestId("tilt");
    expect(tilt.querySelector("img")).toBeInTheDocument();
  });
});
