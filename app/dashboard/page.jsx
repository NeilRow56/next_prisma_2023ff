import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import MyPosts from "@/components/MyPosts";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="container mx-auto px-24">
      <h1 className="m-3 text-2xl font-bold">
        Welcome back {session?.user?.name}
      </h1>
      <MyPosts />
    </main>
  );
}
