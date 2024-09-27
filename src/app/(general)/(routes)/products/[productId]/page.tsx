import { db } from "@/lib/db";
import ProductDetails from "./_components/product-details";

interface ProductIdPageProps {
  params: {
    productId: string;
  };
}

const ProductIdPage = async ({ params }: ProductIdPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id: params.productId,
    },
  });

  if (!product) {
    return "Product is not available";
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductIdPage;
