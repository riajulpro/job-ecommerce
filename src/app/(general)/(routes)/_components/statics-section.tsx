import { Car, DollarSign, ShieldCheck } from "lucide-react";

const StaticsSection = () => {
  return (
    <div className="content my-10">
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10 w-full justify-between">
        <div className="w-full flex items-center gap-x-5 bg-green-100 rounded-md p-5">
          <div className="bg-green-400 h-12 w-12 rounded-full flex items-center justify-center">
            <Car />
          </div>
          <div>
            <h3 className="text-sm text-slate-600">Free Shipping</h3>
            <h2 className="text-2xl font-bold">From $99.00</h2>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-5 bg-green-100 rounded-md p-5">
          <div className="bg-green-400 h-12 w-12 rounded-full flex items-center justify-center">
            <DollarSign />
          </div>
          <div>
            <h3 className="text-sm text-slate-600">Money Guarantee</h3>
            <h2 className="text-2xl font-bold">30 Days Back</h2>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-5 bg-green-100 rounded-md p-5">
          <div className="bg-green-400 h-12 w-12 rounded-full flex items-center justify-center">
            <ShieldCheck />
          </div>
          <div>
            <h3 className="text-sm text-slate-600">100% Safe</h3>
            <h2 className="text-2xl font-bold">Secrue Shipping</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticsSection;
