"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./modern-theme.css";

const products = [
  { id: 1, url: "/images/m1.png", name: "Product 1" },
  { id: 2, url: "/images/m2.png", name: "Product 2" },
  { id: 3, url: "/images/m3.png", name: "Product 3" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextArrowButton: React.FC<any> = (props) => {
  const { onClick } = props;

  return (
    <div className="absolute right-20 top-1/2 -translate-y-1/2 h-10 w-10 bg-white rounded-full flex items-center justify-center">
      <button onClick={onClick}>≫</button>
    </div>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrevArrowButton = () => {
  return null;
};

const ModernProductCard = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 786,
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
    prevArrow: <PrevArrowButton />,
    nextArrow: <NextArrowButton />,
    afterChange: (current: number) => setActiveSlide(current),
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);

  return (
    <div className="max-w-5xl relative">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => (
          <div key={product.name} className="px-4">
            <div
              className={cn(
                "h-64 overflow-hidden rounded-lg duration-150",
                activeSlide === index && "h-68 overflow-hidden duration-150 "
              )}
            >
              <div className={cn("h-64", activeSlide === index && "h-68")}>
                <Image
                  src={product.url}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover rounded-lg duration-150"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ModernProductCard;
