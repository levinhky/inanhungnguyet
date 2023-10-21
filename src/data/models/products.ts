import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      require: true,
    },
    status: Boolean,
    sku: {
      type: String,
      unique: true,
    },
    thumbs: [String],
    capacity: String,
    color: String,
    characteristics: String,
    design: String,
    uses: String,
    slug: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
  },
  {
    timestamps: true,
  }
);

export const ProductSchema =
  mongoose.models.Products || mongoose.model("Products", productSchema);
