"use client";

import PostSearch from "@/components/PostSearch";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
// import PostSearch from "@/components/PostSearch";

const fetchPosts = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");
  const { data, isLoading } = useSWR(
    `/api/search?q=${encodedSearchQuery}`,
    fetchPosts,
    { revalidateOnFocus: false }
  );

  if (!encodedSearchQuery) {
    router.push("/");
  }

  if (isLoading) {
    return <Spinner className="ml-24" />;
  }

  if (!data?.posts) {
    return null;
  }

  return (
    <>
      <span className="text-xl">
        Showing results for:{" "}
        <span className="font-semibold">{searchQuery}</span>
      </span>

      <PostSearch posts={data.posts} />
    </>
  );
};

export default SearchPage;
