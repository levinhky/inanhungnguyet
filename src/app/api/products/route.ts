import { generateRandomSku } from "@/assets/libs/functions";
import connectDB from "@/assets/libs/mongodb";
import { ProductSchema } from "@/data/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  data.sku = generateRandomSku(6);

  await connectDB();
  const newProduct = await ProductSchema.create(data);

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
  id
    ? await ProductSchema.findByIdAndDelete(id)
    : await ProductSchema.deleteMany();

  return NextResponse.json({ message: "Deleted!" });
}

export async function PUT(request: NextRequest) {
  const { id, ...data } = await request.json();
  await connectDB();
  await ProductSchema.findByIdAndUpdate(id, { ...data });

  return NextResponse.json({ message: "Update successfully!" });
}
