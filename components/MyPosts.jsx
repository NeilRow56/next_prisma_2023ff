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
  if (data) console.log(data);
  return (
    <div>
      <EditPost />
    </div>
  );
}
