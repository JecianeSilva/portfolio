import Image from "next/image"
import backgroundImage from "../../assets/imagens/me.png"

interface AboutProps { }

export function About({ ...rest }: AboutProps) {
  return (
    <div className="bg-white h-full w-full pt-24 pb-20 px-8">
      <div className="flex max-w-content w-full h-full mx-auto">
        <div className="relative min-w-[384px] mr-20">
          <Image className="relative z-10" src={backgroundImage} alt="Jeciane Amorim" width={384} height={560} />
          <div className="absolute bottom-10 left-10 min-w-[384px] min-h-[560px] border-4 border-sky-400"></div>
        </div>
        <div className="flex flex-col">
          <label className="mb-4 text-sky-300 font-medium">Um pouco</label>
          <h2 className="text-5xl text-slate-900 font-cursive mb-8">Sobre mim</h2>
          <p className="text-slate-500 mb-12">
            Olá, eu sou  Jeciane Amorim, graduando em Ciência da Computação, trabalho com desenvolvimento web e mobile utilizando ReactJs e React Native. Tenho experiência desenvolvendo com React usando Redux, React Hook, REST APIs, HTML, CSS, JS, TS, Bootstrap, Material Ui, SASS, Tailwind, Storybook, GraphQl, Socket.io, entre outras tecnologias.
          </p>
          <p className="text-slate-500 mb-12">
            Sou comunicativa, organizada, gosto de trabalhar em equipe, estou disposta a aprender e compartilhar conhecimentos. Atualmente estou estudando sobre Angular, Typescript e Tailwind.
          </p>
        </div>
      </div>
    </div >
  )
}