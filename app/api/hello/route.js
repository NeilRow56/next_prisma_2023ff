import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ message: "Hello, Next.js!" });
}

// export async function POST(request) {
//   return NextResponse.json({ message: "Hello from POST route" });
// }
