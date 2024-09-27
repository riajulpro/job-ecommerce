import { db } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductForm from "./_components/products-form";

const AddProductPage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="max-w-2xl mx-auto py-5">
      <div className="p-6">
        <Link href="/dashboard">
          <Button variant="ghost">Back to dashboard</Button>
        </Link>
        <h1 className="text-3xl font-bold mb-5">Add a new product</h1>
      </div>
      <ProductForm categories={categories} />
    </div>
  );
};

export default AddProductPage;
