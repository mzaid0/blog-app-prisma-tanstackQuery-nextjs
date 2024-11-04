import { NextResponse } from "next/server";
import db from "../../../lib/db";

export const GET = async () => {
  const tags = await db.tag.findMany({});
  return NextResponse.json(tags, { status: 200 });
};
