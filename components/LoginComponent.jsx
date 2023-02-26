"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="mr-3 flex items-center px-2">
        {" "}
        <div className="mr-2 text-yellow-500">
          Signed in as {session.user.name}
        </div>
        <button
          className="rounded-md bg-slate-500 px-2 py-1 text-white"
          onClick={() => signOut()}
        >
          Sign out
        </button>{" "}
      </div>
    );
  }
  return (
    <>
      <div className="mr-2 text-yellow-500">Not signed in</div>
      <button
        onClick={() => signIn()}
        className="rounded-md bg-slate-500 px-2 py-1 text-white"
      >
        Sign in
      </button>{" "}
    </>
  );
}
