import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const productId = params.productId;

  try {
    const body = await req.json();
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
    } = body;

    const existingProduct = await db.product.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    const updatedProduct = await db.product.update({
      where: { id: productId },
      data: {
        name: name || existingProduct.name,
        description: description || existingProduct.description,
        brandName: brandName || existingProduct.brandName,
        oldPrice: oldPrice || existingProduct.oldPrice,
        newPrice: newPrice || existingProduct.newPrice,
        sizes: sizes || existingProduct.sizes,
        colors: colors || existingProduct.colors,
        thumbnails: thumbnails || existingProduct.thumbnails,
        categoryId: categoryId || existingProduct.categoryId,
      },
    });

    return NextResponse.json(
      { message: "Product updated successfully", product: updatedProduct },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// Delete product by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const productId = params.productId;

  try {
    const existingProduct = await db.product.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    await db.product.delete({
      where: { id: productId },
    });

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
