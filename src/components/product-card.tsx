"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import Link from "next/link";

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  brandName: string;
  newPrice: number;
  oldPrice: number;
  productId: string;
}

export default function ProductCard({
  imageUrl = "/placeholder.svg?height=200&width=200",
  productName = "Stylish Product",
  brandName = "Brand Name",
  newPrice = 79.99,
  oldPrice = 99.99,
  productId = "123",
}: ProductCardProps) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const handleAddToCart = () => {
    const productData = {
      id: cart.items.length + 1,
      name: productName,
      price: newPrice,
      quantity: 1,
    };
    dispatch(addToCart(productData));
  };

  return (
    <Card className="lg:w-64 overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={productName}
          width={256}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute z-[10] inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            className="font-semibold"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <Link href={`/products/${productId}`}>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 truncate">{productName}</h3>
          <p className="text-sm text-muted-foreground mb-2">{brandName}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">${newPrice.toFixed(2)}</span>
            <span className="text-sm text-muted-foreground line-through">
              ${oldPrice.toFixed(2)}
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
