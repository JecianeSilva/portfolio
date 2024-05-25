import { SocialMedia } from "../../components/SocialMedia/SocialMedia"

import backgroundImage from "../../assets/imagens/bg-resume.webp"

interface ResumeProps { }

export function Resume({ ...rest }: ResumeProps) {
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