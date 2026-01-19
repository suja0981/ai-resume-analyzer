import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumCard from "~/components/ResumeCard";
import { resume } from "react-dom/server.node";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Generates smart feedback for resumes" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Application & Resume Ratings</h1>
        <h2>Review Your Submissions and check AI-powered feedback </h2>
      </div>


      {resume.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumCard key={resume.id} resume={resume} />
          ))}

        </div>

      )}
    </section>

  </main>
}
