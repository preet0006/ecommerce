"use client";

import Image from "next/image";
import { Star } from "@deemlol/next-icons";

const reviews = [
  {
    name: "David K.",
    rating: 5,
    review:
      "Amazing quality! The fit is perfect and the fabric feels premium.",
  },
  {
    name: "Aman S.",
    rating: 4,
    review:
      "Very comfortable and stylish. Totally worth the price.",
  },
  {
    name: "Rohit M.",
    rating: 5,
    review:
      "Looks exactly like the pictures. Delivery was super fast.",
  },
  {
    name: "Karan P.",
    rating: 4,
    review:
      "Good quality for daily wear. Will definitely order again.",
  },
];

export default function Reviews() {
  return (
    <section className="max-w-6xl  text-xs w-full mx-auto px-4 ">
      
    
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">
          Customer Reviews
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          What our customers are saying
        </p>
      </div>

     
      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-sm  border rounded-2xl p-4
                       shadow-sm hover:shadow-md transition"
          >
            
            <div className="flex items-center gap-3">
              <Image
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                alt="user"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />

              <div>
                <h6 className="font-medium text-gray-900">
                  {item.name}
                </h6>
                <span className="text-xs text-green-600 font-medium">
                  Verified Purchase
                </span>
              </div>
            </div>

           
            <div className="flex gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < item.rating
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

           
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
