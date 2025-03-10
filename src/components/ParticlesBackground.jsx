import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Engine Loaded:", engine);
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#121212" },
        particles: {
          number: { value: 50 },
          color: { value: "#F03C46" },
          shape: { type: "circle" },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
