import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    courseName: String,
    topicName: String,
    date: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;