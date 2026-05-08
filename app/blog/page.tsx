import { Metadata } from "next";
export const revalidate = 300;
import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Blog | Siddhiganesh Joshi",
  description: "Read the latest thoughts, tutorials, and insights on software engineering.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Blog />
    </>
  );
}
