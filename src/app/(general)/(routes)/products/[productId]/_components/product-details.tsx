"use client";

import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedThumbnail, setSelectedThumbnail] = useState(
    product.thumbnails[0]
  );

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const handleAddToCart = () => {
    const productData = {
      id: cart.items.length + 1,
      name: product.name,
      price: product.newPrice,
      quantity: 1,
    };
    dispatch(addToCart(productData));
  };

  return (
    <div className="content">
      <div className="bg-gray-50 rounded-md p-5 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col-reverse md:flex-row gap-2">
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-2">
            {product.thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                onClick={() => setSelectedThumbnail(thumbnail)}
                className={`w-16 h-16 overflow-hidden cursor-pointer p-1 border rounded-lg ${
                  selectedThumbnail === thumbnail
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-14 h-14 object-cover rounded-md"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
          <div className="w-full max-h-[500px] mb-4 overflow-hidden rounded-lg">
            <Image
              src={selectedThumbnail}
              alt={product.name}
              className="w-full h-auto object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Right Section: Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>

          {/* Price */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-semibold text-red-500">
              ${product.newPrice.toFixed(2)}
            </span>
            {product.oldPrice > product.newPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Brand Name */}
          <div className="mb-4">
            <p className="text-md font-medium">Brand: {product.brandName}</p>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <p className="text-md font-medium">
              Sizes: {product.sizes.join(", ")}
            </p>
          </div>

          {/* Colors */}
          <div className="mb-4">
            <p className="text-md font-medium">
              Available Colors: {product.colors.join(", ")}
            </p>
          </div>

          {/* Ratings */}
          <div className="mb-4">
            <p className="text-md font-medium">
              Ratings: {product.ratings} / 5
            </p>
          </div>

          {/* Add to Cart Button */}
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
