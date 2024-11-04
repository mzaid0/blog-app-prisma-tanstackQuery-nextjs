import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db";

export const POST = async (request: NextRequest) => {
  try {
    const { title, description, tagId } = await request.json(); // Adjust to use tagId
    console.log(title, description, tagId);

    await db.post.create({
      data: {
        title,
        description,
        tagId, // Correct field for the relation
      },
    });

    return NextResponse.json(
      { message: "Post created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error creating post", error);
    return NextResponse.json(
      { message: "Error creating post" },
      { status: 500 }
    );
  }
};
