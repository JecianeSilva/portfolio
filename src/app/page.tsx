import { Header } from "../components/Header/Header";
import { Resume } from "../pages/Resume/resume";
import { About } from "../pages/About/about";

export default function Home() {
  return (
    <main className="bg-dark text-slate-200">
      <Resume />
      <About />
    </main>
  );
}
