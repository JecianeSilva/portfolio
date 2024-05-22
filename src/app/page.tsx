import Image from "next/image"

import logo from "../assets/logo.svg"
import { Navbar } from "../components/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-dark text-slate-200">
      <header className="flex items-center justify-around">
        <Image className="p-2" src={logo} alt="Jeciane Amorim" width={145} height={56} />
        <Navbar />
        <div className="flex bg-sky-300 text-sky-950 font-bold py-2 px-6 rounded-md justify-center">
          <Link className="" target="_blank" href="https://www.linkedin.com/in/jeciane-amorim-056513184/">Curriculo</Link>
        </div>
      </header>
    </main>
  );
}
