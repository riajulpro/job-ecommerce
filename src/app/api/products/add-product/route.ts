import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      description,
      brandName,
      oldPrice,
      newPrice,
      sizes,
      colors,
      thumbnails,
      categoryId,
    } = await req.json();

    if (
      !name ||
      !description ||
      !brandName ||
      !newPrice ||
      !sizes ||
      !colors ||
      !thumbnails
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const product = await db.product.create({
      data: {
        name,
        description,
        brandName,
        oldPrice: oldPrice || newPrice,
        newPrice,
        sizes,
        colors,
        thumbnails,
        categoryId,
      },
    });

    return NextResponse.json(
      { message: "Product created successfully", product },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
