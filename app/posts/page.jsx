"use client";
import BlogPostComponent from "@/components/BlogPostComponent";

export default function Home() {
  return (
    <section className="container mx-auto  text-center">
      <h1 className="pt-24 text-5xl font-bold text-teal-700">
        Blog Page - everyone can see this page
      </h1>
      <BlogPostComponent />
    </section>
  );
}
