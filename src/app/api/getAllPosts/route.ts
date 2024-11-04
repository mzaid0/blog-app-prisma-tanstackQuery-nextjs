import { NextResponse } from "next/server";
import db from "../../../lib/db";
export const dynamic = "force-dynamic";

export const GET = async () => {
  console.log("start");
  const posts = await db.post.findMany();
  console.log("after", posts);

  return NextResponse.json(posts, { status: 200 });
};
