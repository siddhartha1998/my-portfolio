import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '6rem' }}>
        <About />
      </div>
    </>
  );
}
