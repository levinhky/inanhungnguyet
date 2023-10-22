import { generateRandomSku, slugify } from "@/assets/libs/functions";
import connectDB from "@/assets/libs/mongodb";
import { CategorySchema } from "@/data/models/categorySchema";
import { ProductSchema } from "@/data/models/productSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  data.sku = generateRandomSku(6);
  data.slug = slugify(data.name);

  await connectDB();
  const newProduct = await ProductSchema.create(data);

  if (data.fatherCategories) {
    data.fatherCategories.map(async (categoryId: string) => {
      await CategorySchema.findById(categoryId).updateOne({
        $push: { productsInCategory: newProduct._id },
      });
    });
  }

  return NextResponse.json({ newProduct });
}

export async function GET() {
  await connectDB();
  const products = await ProductSchema.find();

  return NextResponse.json({ products });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  if (id) {
    await CategorySchema.updateMany(
      { productsInCategory: id },
      { $pull: { productsInCategory: id } }
    );
    await ProductSchema.findByIdAndDelete(id);
  } else {
    await CategorySchema.updateMany({}, { $set: { productsInCategory: [] } });
    await ProductSchema.deleteMany();
  }

  return NextResponse.json({ message: "Deleted!" });
}

export async function PUT(request: NextRequest) {
  const { id, ...data } = await request.json();
  if(data.name) {
    data.slug = slugify(data.name);
  }
  await connectDB();
  await ProductSchema.findByIdAndUpdate(id, { ...data });

  return NextResponse.json({ message: "Update successfully!" });
}
