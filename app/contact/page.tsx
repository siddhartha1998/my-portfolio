import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '6rem' }}>
        <Contact />
      </div>
    </>
  );
}
