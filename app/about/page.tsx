import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Siddhiganesh Joshi",
  description: "Learn more about Siddhiganesh Joshi, a Software Engineer and Tech Lead.",
};

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
