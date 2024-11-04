import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db"; // Adjust the path to your db instance

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await db.post.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error deleting post", error);

    return NextResponse.json(
      { message: "Error deleting post" },
      { status: 500 }
    );
  }
};

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const { title, description, tagId } = await request.json();

  await db.post.update({
    where: { id },
    data: { title, description, tagId },
  });

  return NextResponse.json(
    { message: "Post updated successfully" },
    { status: 200 }
  );
};

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const post = await db.post.findFirst({
      where: { id },
      include: {
        tag: true,
      },
    });
    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.log("Failed to retrieve tag", error);
  }
};
