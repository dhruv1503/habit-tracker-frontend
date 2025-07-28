"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        // enable: true,
        // zIndex: -1, // ensure it's behind your content
      },
      background: {
        color: {
          value: "#000", // deep space background
        },
      },
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#ffffff", // white stars
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 1,
          random: true,
        },
        move: {
          enable: true,
          speed: 0.75,
          direction: "none",
          straight: false,
          outModes: {
            default: "out",
          },
        },
        links: {
          enable: false, // no lines between stars
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
}
