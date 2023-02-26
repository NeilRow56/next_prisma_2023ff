export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  return Response.json({ posts });
}

export async function POST() {
  //Logic for posting a blog post
  return Response.json({ message: "Hello from POST /blogpost route" });
}

export async function DELETE() {
  //Logic for deleting a blog post
  return Response.json({ message: "Hello from DELETE /blogpost route" });
}
