"use client";
import BlogPostComponent from "@/components/BlogPostComponent";
import PostComponent from "@/components/PostComponent";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch all posts
const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });
  if (error) return error;
  if (isLoading) return "Loading.....";

  return (
    <section className="container mx-auto  text-center">
      <h1 className="pt-24 text-5xl font-bold text-teal-700">
        Blog Page - everyone can see this page
      </h1>
      <BlogPostComponent />
      {data?.map((post) => (
        <PostComponent
          key={post.id}
          id={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
        />
      ))}
    </section>
  );
}
