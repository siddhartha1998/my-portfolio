import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '8rem' }}>
        <Contact />
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
