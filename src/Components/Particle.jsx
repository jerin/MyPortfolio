import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // or loadSlim, loadBasic, etc.

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Loads the full tsParticles bundle
    // Alternatively, use loadSlim(engine) or loadBasic(engine) for smaller bundles
  }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   console.log("Particles container loaded", container);
  // }, []);

  const options = {
    // Your tsParticles configuration options here
    // Example: simple snow effect
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#dcdaf1ff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // loaded={particlesLoaded}
      options={options}
    />
  );
}

export default Particle;
