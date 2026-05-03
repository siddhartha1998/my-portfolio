import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="container" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '2.5rem', fontFamily: 'var(--font-outfit)' }}>About Me</h1>
        <div className="glass" style={{ padding: '3rem', lineHeight: '1.8' }}>
          <p style={{ fontSize: '1.2rem', color: 'hsl(var(--muted-foreground))' }}>
            [Detailed content will be provided by the user later.]
          </p>
          <p style={{ marginTop: '2rem' }}>
            Software developer and tech lead specializing in .NET, Java, and Angular, with a focus on building scalable, high-performance applications. I lead teams through architecture, development, and delivery while promoting clean code, best practices, and effective collaboration.
          </p>
        </div>
      </section>
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
