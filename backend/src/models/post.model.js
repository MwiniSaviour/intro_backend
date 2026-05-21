import mongoose, { Schema } from "mongoose";

const postShema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    age: {
      type: Number,
      required: true,
      min: 1,
      max: 150
    },

  },

  {
    timestamps: true
  }
)

export const Post = mongoose.model("post", postShema) 