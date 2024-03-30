import postSchema from "@/database/post";
import connectMongoDB from "@/database/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();
    const post = await postSchema.findOne({ _id: id });
    if (!post) {
      return NextResponse.error({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.error({ message: "Failed to fetch post" }, { status: 500 });
  }
}


export async function PUT(request, context) {
  const { id } = context.params;
  const { newCourseName: courseName, newTopicName: topicName, newDate: date, newDescription: description } = await request.json();
  try {
    await connectMongoDB();
    await postSchema.findByIdAndUpdate(id, { courseName, topicName, date, description });
    return NextResponse.json({ message: "Post updated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error({ message: "Failed to update post" }, { status: 500 });
  }
}


