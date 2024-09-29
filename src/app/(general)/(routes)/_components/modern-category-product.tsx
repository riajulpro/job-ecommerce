import { Button } from "@/components/ui/button";
import ModernProductCard from "./modern-product-card";

const ModernCategoryProduct = () => {
  return (
    <div className="bg-[#F2F0F1] py-10 relative px-4 md:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="px-5 xl:pl-40">
          <h2 className="max-w-md text-3xl font-bold">
            50+ Beautiful & Modern Category Product
          </h2>
          <p className="max-w-[320px] my-5 text-slate-600">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Button>Explore more</Button>
        </div>
        <div className="w-full lg:px-0 lg:w-auto">
          <ModernProductCard />
        </div>
      </div>
    </div>
  );
};

export default ModernCategoryProduct;
