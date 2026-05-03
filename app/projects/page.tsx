import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '8rem' }}>
        <Projects />
      </div>
      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <p style={{ color: 'hsl(var(--muted-foreground))' }}>
            &copy; {new Date().getFullYear()} Siddhiganesh Joshi.
          </p>
        </div>
      </footer>
    </>
  );
}
