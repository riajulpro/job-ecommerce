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
          <div className="md:col-span-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/50 rounded-md px-6 py-10 flex flex-col gap-3 text-white">
              <h1 className="text-2xl font-bold">
                Hawaiian <br />
                Shirt
              </h1>
              <p>Dress up in summer vibe</p>
              <p className="uppercase text-xl">Upto 50% off</p>
              <p>↓</p>
              <div>
                <Button
                  variant="outline"
                  className="bg-transparent text-white hover:text-black"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
            <Link href="/products">
              <Image src={latestOne} alt="Latest Product one" />
            </Link>
          </div>
          <div className="col-span-2 hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 rounded-md px-6 py-10 flex flex-col items-end gap-3 text-white">
              <h1 className="text-2xl font-bold">
                Raven Hoodie <br /> Design
              </h1>
              <p>New design every week</p>
              <p className="uppercase text-xl">Upto 40% off</p>
              <p>↓</p>
              <div>
                <Button
                  variant="outline"
                  className="bg-transparent text-white hover:text-black"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
            <Link href="/products">
              <Image src={latestTwo} alt="Latest Product Two" />
            </Link>
          </div>
          <div className="col-span-2 hidden md:block relative">
            <div className="absolute inset-0 rounded-md px-6 py-10 flex flex-col items-end gap-3">
              <h1 className="text-2xl font-bold">
                Cargo <br /> Joggers
              </h1>
              <p>Move with style & comfort</p>
              <p className="uppercase text-xl">Upto 40% off</p>
              <p>↓</p>
              <div>
                <Button
                  variant="outline"
                  className="bg-transparent border-black"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
            <Link href="/products">
              <Image src={latestThree} alt="Latest Product Three" />
            </Link>
          </div>
          <div className="col-span-3 hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 rounded-md px-6 py-10 flex flex-col items-end gap-3 text-white">
              <h1 className="text-2xl font-bold">
                Urban <br /> Shirt
              </h1>
              <p>Live in comfort</p>
              <p className="uppercase text-xl">Flat 60% off</p>
              <p>↓</p>
              <div>
                <Button
                  variant="outline"
                  className="bg-transparent text-white hover:text-black"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
            <Link href="/products">
              <Image src={latestFour} alt="Latest Product Four" />
            </Link>
          </div>
          <div className="col-span-3 hidden md:flex bg-gradient-to-r from-white to-violet-200 rounded-md items-center gap-5 px-5 relative">
            <div className="absolute left-64 rounded-md px-6 py-10 flex flex-col gap-3">
              <h1 className="text-2xl font-bold">
                Modern <br /> Mobile Phone
              </h1>
              <p>Street Style Icon</p>
              <p className="uppercase text-xl">Flat 60% off</p>
              <p>↓</p>
              <div>
                <Button
                  variant="outline"
                  className="bg-transparent border-black"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
            <Link href="/products">
              <div>
                <Image src={latestFive} alt="Latest Product Five" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
