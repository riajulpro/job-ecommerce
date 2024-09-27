import { Button } from "@/components/ui/button";

import latestOne from "../../../images/latest-1.png";
import latestTwo from "../../../images/latest-2.png";
import latestThree from "../../../images/latest-3.png";
import latestFour from "../../../images/latest-4.png";
import latestFive from "../../../images/latest-5.png";
import Image from "next/image";
import Link from "next/link";

const LatestProduct = () => {
  return (
    <div className="bg-gray-200">
      <div className="content">
        <div className="my-5 flex items-center justify-between">
          <h1 className="title">Latest Product</h1>
          <Button className="bg-violet-600 text-white">View More</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          <div className="md:col-span-2">
            <Link href="/products">
              <Image src={latestOne} alt="Latest Product one" />
            </Link>
          </div>
          <div className="col-span-2 hidden md:block">
            <Link href="/products">
              <Image src={latestTwo} alt="Latest Product Two" />
            </Link>
          </div>
          <div className="col-span-2 hidden md:block">
            <Link href="/products">
              <Image src={latestThree} alt="Latest Product Three" />
            </Link>
          </div>
          <div className="col-span-3 hidden md:block">
            <Link href="/products">
              <Image src={latestFour} alt="Latest Product Four" />
            </Link>
          </div>
          <div className="col-span-3 hidden md:flex bg-gray-100 rounded-md items-center gap-5 px-5">
            <Link href="/products">
              <Image src={latestFive} alt="Latest Product Five" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
