"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  brandName: string;
  newPrice: number;
  oldPrice: number;
  productId: string;
}

export default function EditableProductCard({
  imageUrl = "/placeholder.svg?height=200&width=200",
  productName = "Stylish Product",
  brandName = "Brand Name",
  newPrice = 79.99,
  oldPrice = 99.99,
  productId = "123",
}: ProductCardProps) {
  const router = useRouter();

  const handleDeleteProduct = async () => {
    try {
      await axios.delete(`/api/products/${productId}`);

      toast.success("Product successfully deleted!");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Card className="w-64 overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={productName}
          width={256}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute z-[999] inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center gap-x-2">
            <Link href={`/update/${productId}`}>
              <Button variant="secondary" className="font-semibold" size="sm">
                Edit
              </Button>
            </Link>
            <Button
              variant="destructive"
              className="font-semibold"
              size="sm"
              onClick={handleDeleteProduct}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
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
    </Card>
  );
}
