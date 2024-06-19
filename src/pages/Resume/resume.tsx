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
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { TypeWriter } from "../../components/Typewriter/TypeWriter";

interface ResumeProps { }

export function Resume({ ...rest }: ResumeProps) {
  const [initAnimation, setInitAnimation] = useState(false);

  const listSocialMedia = [
    { id: 1, href: "https://github.com/jecianeSilva", icon: GithubLogo },
    { id: 2, href: "https://www.linkedin.com/in/jeciane-amorim-056513184/", icon: LinkedinLogo },
    { id: 3, href: "https://www.instagram.com/jeciane.dev", icon: InstagramLogo },
  ]

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
      fpsLimit: 250,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 400,
            links: {
              blink: false,
              consent: false,
              opacity: 1
            }
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

  if (initAnimation) {
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

        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="w-full h-full"
        />
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full flex justify-center overflow-hidden p-8">
          <div className="animate-fade-in-up flex h-full w-full max-w-content items-center max-w-[1180px] pb-16">
            <div className="max-w-[544px] ">
              <p className="text-2xl text-slate-300 mb-4">
                Olá 👋🏾, meu nome é
              </p>
              <h1 className="font-cursive text-5.5xl text-sky-500  mb-8">
                <TypeWriter textProps="Jeciane Amorim" />
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Sou <span className="text-sky-300 font-semibold">Desenvolvedora Frontend</span>, e gostaria de apresentar meu trabalho e um pouco mais sobre mim, através deste portfólio.
              </p>
              <div className="flex mt-12 gap-12">
                {listSocialMedia.map((item) => (
                  <SocialMedia key={item.id} listSocialMedia={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  return (
    <div className="relative overflow-hidden bg-dark h-screen">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full flex justify-center overflow-hidden p-8">
        <div className="flex max-w-content items-center max-w-[1180px] pb-16">
          <span className="loading text-white loading-dots loading-lg"></span>
        </div>
      </div>
    </div>
  )
}