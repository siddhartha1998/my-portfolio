import { Metadata } from "next";
export const revalidate = 300;
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects | Siddhiganesh Joshi",
  description: "Explore the technical projects and open source contributions by Siddhiganesh Joshi.",
};

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
