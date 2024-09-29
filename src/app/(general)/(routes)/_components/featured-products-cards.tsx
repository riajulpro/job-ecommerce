"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

const featuredProducts = [
  {
    name: "T-shirt with Tape Details",
    thumbnail: "/images/f1.png",
    oldPrice: 123,
    newPrice: 99,
    ratings: 4.5,
  },
  {
    name: "Latest Mini-split systems",
    thumbnail: "/images/f2.png",
    oldPrice: 123,
    newPrice: 99,
    ratings: 4.5,
  },
  {
    name: "T-shirt with Tape Details",
    thumbnail: "/images/f3.png",
    oldPrice: 123,
    newPrice: 99,
    ratings: 4.5,
  },
  {
    name: "12FT PVC Decorative Line",
    thumbnail: "/images/f4.png",
    oldPrice: 123,
    newPrice: 99,
    ratings: 4.5,
  },
  {
    name: "Single Zone Mini-split systems",
    thumbnail: "/images/f5.png",
    oldPrice: 123,
    newPrice: 99,
    ratings: 4.5,
  },
];

export default function FeaturedProductsCards() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {featuredProducts.map((product) => (
          <Link href={`/products`} key={product.name}>
            <div className="p-1">
              <div className="relative bg-[#F0EEED] p-3 rounded-md h-[270px] flex flex-col gap-3">
                <div className="absolute left-3 top-3 bg-white rounded-full p-1 text-black">
                  <Heart size={16} />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src={product.thumbnail}
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="text-xs text-black/70">{product.name}</h3>
                <div className="flex items-center justify-between border-t border-gray-300 pt-2">
                  <p className="text-normal">
                    <span className="font-bold mr-2">${product.newPrice}</span>
                    <span className="font-thin line-through text-slate-600">
                      ${product.oldPrice}
                    </span>
                  </p>
                  <p className="text-xs">{`(${product.ratings})`}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
