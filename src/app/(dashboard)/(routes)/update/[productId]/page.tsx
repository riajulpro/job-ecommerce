import { db } from "@/lib/db";
import EditProductForm from "./_components/edit-product-form";

interface ProductUpdatePageProps {
  params: {
    productId: string;
  };
}

const ProductUpdatePage = async ({ params }: ProductUpdatePageProps) => {
  const product = await db.product.findUnique({
    where: {
      id: params.productId,
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="content my-5">
      <div className="max-w-2xl mx-auto my-5">
        <h1 className="title">Update your product information</h1>
      </div>
      <EditProductForm product={product} categories={categories} />
    </div>
  );
};

export default ProductUpdatePage;
