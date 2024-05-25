import Image from "next/image"
import { ComponentProps } from "react"
import logo from "../../assets/logo.svg"
import { Navbar } from "../Navbar/Navbar"
import Link from "next/link"

interface HeaderProps extends ComponentProps<"header"> { }

export function Header({ ...rest }: HeaderProps) {
  return (
    <header {...rest}>
      <div className="flex items-center justify-around max-w-[1560px] mx-auto">
        <Image className="p-2" src={logo} alt="Jeciane Amorim" width={145} height={56} />
        <Navbar />
        <div className="flex bg-sky-300 text-sky-950 font-bold py-2 px-6 rounded-md justify-center">
          <Link target="_blank" href="https://www.linkedin.com/in/jeciane-amorim-056513184/">Curriculo</Link>
        </div>
      </div>
    </header>
  )
}