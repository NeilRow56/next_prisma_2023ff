import prisma from "@/lib/prisma";
// import { Post, User } from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query;

      if (typeof query !== "string") {
        throw new Error("Invalid request");
      }

      /**
       * Search posts
       */
      const posts = await prisma.post.findMany({
        where: {
          OR: [
            {
              title: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              user: {
                name: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
        include: {
          user: true,
        },
      });

      /**
       * Save search
       */
      //   await prisma.searchQuery.create({
      //     data: {
      //       query,
      //     },
      //   });

      res.status(200).json({ posts });
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  }
}
