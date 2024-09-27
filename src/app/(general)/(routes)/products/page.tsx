import ProductCard from "@/components/product-card";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";

const ProductsPage = async () => {
  const products: Product[] = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!products) {
    return "Products are not available!";
  }

  return (
    <div className="content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
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
  );
};

export default ProductsPage;
