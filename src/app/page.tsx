import { Header } from "../components/Header/Header";
import { Resume } from "../pages/Resume/resume";

export default function Home() {
  return (
    <main className="bg-dark text-slate-200">
      <Header />
      <Resume />
    </main>
  );
}
