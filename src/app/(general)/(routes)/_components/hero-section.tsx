import { Button } from "@/components/ui/button";
import bannerImage from "../../../../app/images/banner-img.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-[600px] bg-gray-200 overflow-hidden">
      <div className="content">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-x-5">
          <div className="flex-1">
            <h3 className="mb-3 text-[#F15A2A] font-extrabold">New Arrival</h3>
            <h1 className="text-lg md:text-5xl font-bold">
              Shop with Confidence: Trusted Source for Quality Products
            </h1>
            <p className="my-5 text-xs text-slate-600 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              rem nesciunt nam! Eos laudantium quisquam eum ab adipisci at
              nostrum?
            </p>
            <Button className="bg-[#F15A2A] text-white">Shop Now</Button>
            <div className="mt-5 flex items-center gap-x-7">
              <div>
                <h2 className="static-number">200+</h2>
                <p className="static-info">Internation Brands</p>
              </div>
              <div>
                <h2 className="static-number">2,000+</h2>
                <p className="static-info">High-Quality Products</p>
              </div>
              <div>
                <h2 className="static-number">30,000+</h2>
                <p className="static-info">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image src={bannerImage} alt="Banner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
