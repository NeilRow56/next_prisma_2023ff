"use client";
import Post from "@/components/PostComponent";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

//Fetch post
const fetchDetails = async (slug) => {
  const response = await axios.get(`/api/posts/${slug}`);
  return response.data;
};

export default function PostDetail(url) {
  const { data, isLoading } = useQuery({
    queryKey: ["detail-post"],
    queryFn: () => fetchDetails(url.params.slug),
  });
  if (isLoading) return "Loading";

  return (
    <div className="container mx-auto mt-12 px-24">
      <Post
        id={data?.id}
        name={data?.user.name}
        avatar={data?.user.image}
        postTitle={data?.title}
        comments={data?.comments}
      />
    </div>
  );
}
