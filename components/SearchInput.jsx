"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchInput = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : "");

  const router = useRouter();
  const onSearch = (event) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };
  return (
    <form onSubmit={onSearch} className="mx-auto mt-4 flex w-2/3">
      <input
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className=" w-2/3 flex-1 rounded-full bg-gray-200 px-5 py-1   focus:bg-gray-200 focus:outline-none focus:ring-[1px] focus:ring-green-700 sm:px-5 sm:py-3"
        placeholder="What are you looking for?"
      />
    </form>
  );
};
