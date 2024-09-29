import Image from "next/image";

const photos = [
  "/images/g1.png",
  "/images/g2.png",
  "/images/g3.png",
  "/images/g4.png",
  "/images/g5.png",
  "/images/g6.png",
  "/images/g7.png",
  "/images/g8.png",
  "/images/g9.png",
  "/images/g10.png",
];

const ProductGallery = () => {
  return (
    <div className="my-10">
      <h1 className="title text-center mb-5">Product Gallery</h1>
      <div className="grid grid-cols-12 grid-rows-12 gap-3">
        <div className="bg-gray-100 row-start-1 col-span-2 row-span-6 overflow-hidden max-h-[407px]">
          <Image
            src={photos[0]}
            alt="Gallery photo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 row-start-2 col-span-3 row-span-5 overflow-hidden max-h-[333px]">
          <Image
            src={photos[1]}
            alt="Gallery photo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 row-start-4 col-span-2 row-span-9 overflow-hidden max-h-[318px]">
          <Image
            src={photos[2]}
            alt="Gallery photo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 row-start-2 col-span-2 row-span-5 overflow-hidden max-h-[372px]">
          <Image
            src={photos[3]}
            alt="Gallery photo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 row-start-1 col-span-3 row-span-6 overflow-hidden max-h-[462px]">
          <Image
            src={photos[4]}
            alt="Gallery photo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 col-span-3 row-span-6 row-start-7 overflow-hidden max-h-[344px]">
          <Image
            src={photos[5]}
            alt="Gallery photo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 row-start-7 col-span-2 col-start-4 row-span-5 overflow-hidden max-h-[258px]">
          <Image
            src={photos[6]}
            alt="Gallery photo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 row-start-7 col-span-1 col-start-8 row-span-6 overflow-hidden max-h-[258px]">
          <Image
            src={photos[7]}
            alt="Gallery photo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 row-start-7 col-span-2 col-start-9 row-span-5 overflow-hidden max-h-[209px]">
          <Image
            src={photos[8]}
            alt="Gallery photo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 row-start-7 col-span-2 col-start-11 row-span-6 overflow-hidden max-h-[288px]">
          <Image
            src={photos[9]}
            alt="Gallery photo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
