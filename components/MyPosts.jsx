"use client";

import EditPost from "./EditPost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/getMyAuthPosts");
  return response.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-posts"],
  });
  if (isLoading) return <h1>Posts are loading...</h1>;

  return (
    <div>
      {data?.posts?.map((post) => (
        <EditPost
          id={post.id}
          key={post.id}
          avatar={data.image}
          name={data.name}
          title={post.title}
          comments={post.comments}
        />
      ))}
    </div>
  );
}
