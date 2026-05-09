import Image from "next/image";
import Link from "next/link";
import React from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  images: string[] | null;
};

type ShowItemProps = {
  data?: Product[];
};

const ShowItem = ({ data = [] }: ShowItemProps) => {
  return (
    <div className="flex sm:gap-4 overflow-x-auto whitespace-nowrap w-full no-scrollbar">
      {data.map((item) => (
        <Link
          key={item.id}
          href={`/productDetail/${item.id}`}
          className="flex-shrink-0 w-[220px] md:w-[400px]"
        >
          <div className="rounded-xs sm:rounded-3xl h-[38vh] md:h-[70vh] bg-[#EBEBEA] overflow-hidden">
            <img
              src={item.images?.[0] ?? "/placeholder.png"}
              alt={item.name || "Product image"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm md:text-base font-medium text-black">
              {item.name}
            </p>
            <p className="text-xs md:text-sm text-gray-600">₹{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShowItem;
