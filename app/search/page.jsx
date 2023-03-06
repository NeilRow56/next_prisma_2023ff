"use client";

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
      <div>
        {data.posts.map((post) => (
          <div
            key={post.id}
            className="my-3 flex w-3/4 gap-4 rounded-xl border-[1px] border-zinc-600 p-3"
          >
            <div>
              <Image
                src={post.user.image || ""}
                alt="avatar"
                height={52}
                width={52}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold">{post.user.name}</span>
              <span className="text-lg font-light">{post.title}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchPage;
