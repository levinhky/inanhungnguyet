import { slugify } from "@/assets/libs/functions";
import connectDB from "@/assets/libs/mongodb";
import { CategorySchema } from "@/data/models/categorySchema";
import { ProductSchema } from "@/data/models/productSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  data.slug = slugify(data.name);

  await connectDB();
  const newCategory = await CategorySchema.create(data);

  return NextResponse.json({ newCategory });
}

export async function GET() {
  await connectDB();
  const categories = await CategorySchema.find();

  return NextResponse.json({ categories });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  if (id) {
    await ProductSchema.updateMany(
        { fatherCategories: id },
        { $pull: { fatherCategories: id } }
      );
    await CategorySchema.findByIdAndDelete(id);
  } else {
    await ProductSchema.updateMany({}, { $set: { fatherCategories: [] } });
    await CategorySchema.deleteMany();
  }

  return NextResponse.json({ message: "Deleted!" });
}

export async function PUT(request: NextRequest) {
  const { id, ...data } = await request.json();
  if (data.name) {
    data.slug = slugify(data.name);
  }
  await connectDB();
  await CategorySchema.findByIdAndUpdate(id, { ...data });

  return NextResponse.json({ message: "Update successfully!" });
}
