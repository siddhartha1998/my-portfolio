import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '6rem' }}>
        <Projects />
      </div>
    </>
  );
}
