import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../Home.jsx";

vi.mock("react-helmet-async", () => ({
  Helmet: ({ children }) => <>{children}</>,
  HelmetProvider: ({ children }) => <>{children}</>,
}));

vi.mock("../../Particle.jsx", () => ({ default: () => <div data-testid="particle" /> }));
vi.mock("../../../assets/home-main.svg", () => ({ default: "home-main.svg" }));

vi.mock("typewriter-effect", () => ({
  default: ({ options }) => (
    <div data-testid="typewriter">
      {options.strings.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  ),
}));

vi.mock("react-parallax-tilt", () => ({
  default: ({ children }) => <div>{children}</div>,
}));

vi.mock("../../../assets/avatar.svg", () => ({ default: "avatar.svg" }));

describe("Home", () => {
  it("renders the greeting heading", () => {
    render(<Home />);
    expect(screen.getByText(/Hi There!/i)).toBeInTheDocument();
  });

  it("renders the name heading", () => {
    render(<Home />);
    expect(screen.getByText(/JERIN JOHN/i)).toBeInTheDocument();
  });

  it("renders the wave emoji span", () => {
    const { container } = render(<Home />);
    const wave = container.querySelector('[role="img"][aria-labelledby="wave"]');
    expect(wave).toBeInTheDocument();
    expect(wave).toHaveTextContent("👋🏻");
  });

  it("renders the home logo image", () => {
    render(<Home />);
    expect(screen.getByAltText("home pic")).toBeInTheDocument();
  });

  it("renders the Particle background", () => {
    render(<Home />);
    expect(screen.getByTestId("particle")).toBeInTheDocument();
  });

  it("renders the Typewriter component with role strings", () => {
    render(<Home />);
    expect(screen.getByTestId("typewriter")).toBeInTheDocument();
    expect(screen.getByText("Software Developer")).toBeInTheDocument();
  });

  it("renders the HomeDetails section with intro heading", () => {
    render(<Home />);
    expect(screen.getByText(/introduce/i)).toBeInTheDocument();
  });

  it("renders the avatar image inside HomeDetails", () => {
    render(<Home />);
    expect(screen.getByAltText("avatar")).toBeInTheDocument();
  });
});
