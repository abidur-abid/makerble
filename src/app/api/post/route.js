
import postSchema from "@/database/post";
import connectMongoDB from "@/database/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { courseName, topicName, date, description } = await request.json();
  await connectMongoDB();
  await postSchema.create({courseName, topicName, date, description });
  return NextResponse.json({ message: "Post Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const posts = await postSchema.find();
  return NextResponse.json({ posts });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await postSchema.findByIdAndDelete(id);
  return NextResponse.json({ message: "Post deleted" }, { status: 200 });
}