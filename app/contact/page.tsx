import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Siddhiganesh Joshi",
  description: "Get in touch with Siddhiganesh Joshi for opportunities or collaborations.",
};

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
