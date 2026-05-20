import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minLength: 2,
      maxLength: 120
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      minLength: 2,
      maxLength: 120
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
      maxLength: 30
    }
  },

  {
    timestamps: true
  }
)

// password hashing on save
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return
  this.password = await bcrypt.hash(this.password, 10)
})

// compare password on login
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)
