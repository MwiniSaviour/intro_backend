import { PiStudent } from "react-icons/pi";
import { Post } from "../models/post.model.js";

// create a post 

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body
    if (!name || !description || !age)
      return res.status(400).json({
        message: "All fields are important"
      })

    const post = await Post.create({
      name, description, age
    })
    res.status(201).json({
      message: "Post created successfully", post
    })

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
}

const getPosts = async (req, res) => {
  try {

    // Getting post

    const posts = await Post.find();
    res.status(200).json(posts)

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
}

const updatePosts = async (req, res) => {
  try {
    // Basic validation to check if the body is empty by checking the number of items using Object
    // {} = truthy. {} has one item (null)value 

    if (Object.keys(req.body).length === 0)
      return res.status(400).json({ message: "No data provide update" });

    const post = await Post.findByIdAndUpdate(req.params.id, req.body,
      { new: true }
    )

    if (!post)
      return res.status(400).json({ message: "post not fund" });


    res.status(200).json({ message: "Post successfully", post })
  } catch (error) {
    res.status(500).json({ message: "internal server error" })
  }
}

const deletePosts = async (req, res) => {
  try {

    // finding and deleting user by id
    const erase = await Post.findByIdAndDelete(req.params.id)
    if (!erase)
      return res.status(404).json({ message: "post removal unsuccessful" })

  } catch (err) {
    return res.status(500).json({ message: "internal server error", err })
  }
}

export { createPost, getPosts, updatePosts, deletePosts };