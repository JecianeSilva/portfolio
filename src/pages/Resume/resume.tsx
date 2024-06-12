"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia"

import backgroundImage from "../../assets/imagens/bg-resume.webp"

interface ResumeProps { }

export function Resume({ ...rest }: ResumeProps) {
  const [initAnimation, setInitAnimation] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInitAnimation(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "rgba(7, 0, 28, 0.1)",
        },
      },
      fpsLimit: 150,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      fullScreen: false,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <section
      id="#home"
      className="relative overflow-hidden bg-dark bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("${backgroundImage.src}")`,
        backgroundPosition: "center",
        backgroundSize: "auto 740px",
        height: "740px",
      }}
    >
      {initAnimation &&
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="w-full h-full"
        />}
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full flex justify-center overflow-hidden p-8">
        <div className="flex h-full w-full max-w-content items-center max-w-[1180px] pb-16">
          <div className="max-w-[544px] ">
            <p className="text-2xl text-slate-300 mb-4">
              Olá 👋🏾, meu nome é
            </p>
            <h1 className="font-cursive text-5.5xl text-sky-500  mb-8">
              Jeciane Amorim
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Sou <span className="text-sky-300 font-semibold">Desenvolvedora Frontend</span>, e gostaria de apresentar meu trabalho e um pouco mais sobre mim, através deste portfólio.
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  )
}