import EditableProductCard from "@/components/editable-product-card";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import Link from "next/link";

const DashbaordPage = async () => {
  const products: Product[] = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="content mt-5">
        <div className="flex justify-end">
          <Link href="/add-product">
            <Button>Add new product</Button>
          </Link>
        </div>
      </div>
      <div className="content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
        {products.map((product) => (
          <EditableProductCard
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
    </div>
  );
};

export default DashbaordPage;
