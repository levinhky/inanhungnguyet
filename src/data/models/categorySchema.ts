import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    thumb: String,
    level: Number,
    slug: String,
    subCategory: [
      {
        name: String,
        thumb: String,
        productsInCategory: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
        },
      },
    ],
    productsInCategory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
      },
    ],
  },
  { timestamps: true }
);

export const CategorySchema =
  mongoose.models.Categories || mongoose.model("Categories", categorySchema);
