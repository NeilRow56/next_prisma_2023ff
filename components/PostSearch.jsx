import Image from "next/image";

const PostSearch = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
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
    </>
  );
};

export default PostSearch;
