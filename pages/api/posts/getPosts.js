import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    //Fetch all Posts
    try {
      const data = await prisma.post.findMany({
        include: {
          user: true,
          comments: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "Error has occurred while fetching posts" });
    }
  }
}
