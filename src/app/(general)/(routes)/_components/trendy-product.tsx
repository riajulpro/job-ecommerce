import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import Link from "next/link";

const TrendyProduct = async () => {
  const products: Product[] = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
  });

  if (!products) {
    return "Products are not available!";
  }

  return (
    <div className="my-10">
      <h1 className="title text-center my-5">Super Trendy Products</h1>
      <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            productName={product.name}
            brandName={product.brandName}
            imageUrl={product?.thumbnails[0]}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
      <div className="text-center">
        <Link href="/products">
          <Button className="bg-violet-600 text-white">View more</Button>
        </Link>
      </div>
    </div>
  );
};

export default TrendyProduct;
