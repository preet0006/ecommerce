"use client";

import Link from "next/link";
import { X } from "@deemlol/next-icons";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface SubmenuCategory {
  categories: string[];
  highlights: string[];
  image: string;
}

export type SubmenuData = Record<string, SubmenuCategory>;

interface SubmenuProps {
  title?: string;
  categories?: string[];
  highlights?: string[];
  image?: string;
  isMobile?: boolean;
  allData?: SubmenuData;
  setShowMobileMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Submenu = ({ title, categories, highlights, image, isMobile, allData, setShowMobileMenu,}: SubmenuProps) => {

    const sidebarRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {

    if (isMobile && sidebarRef.current && overlayRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.4, ease: "power3.out" }
      );

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 }
      );
    }
  }, [isMobile]);

  const closeMenu = () => {
    if (!sidebarRef.current || !overlayRef.current) return;

    gsap.to(sidebarRef.current, {
      x: "-100%",
      duration: 0.35,
      ease: "power3.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => setShowMobileMenu?.(false),
    });
  };

  if (isMobile && allData) {
    return (
      <>
        
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black/30 z-40"
          onClick={closeMenu}
        />

       
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full w-64 bg-gray-50 shadow-lg p-4 overflow-y-auto z-50"
        >
        
          <div className="flex w-full justify-between items-center mb-4">
            <h3 className="text-[17px] font-semibold text-gray-800">
              Browse Menu
            </h3>

            <X
              size={24}
              className="cursor-pointer"
              onClick={closeMenu}
            />
          </div>

          
          {Object.keys(allData).map((cat) => (
            <div key={cat} className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">{cat}</h4>

              {/* Categories */}
              <div className="mb-2">
                <span className="text-gray-500 text-sm">Categories</span>
                <div className="flex flex-col mt-1 space-y-1">
                  {allData[cat].categories.map((c, idx) => (
                    <Link
                      key={idx}
                      href={`/products/${c}`}
                      onClick={closeMenu}
                      className="px-3 py-2 text-xs bg-gray-100 rounded-md hover:bg-gray-300"
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              </div>

              
              <div>
                <span className="text-gray-500 text-sm">Highlights</span>
                <div className="flex flex-col mt-1 space-y-1">
                  {allData[cat].highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-gray-100 text-xs rounded-md"
                    >
                      {hl}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  
  return (
    <div className="flex justify-between w-full text-2xl font-semibold px-4 py-6">
      <div className="flex flex-col items-center space-y-2">
        <span className="bg-white text-[14px] rounded-4xl px-2">
          Categories
        </span>
        {categories?.map((item, idx) => (
          <Link href={`/products/${item}`} key={idx}>
            {item}
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-2">
        <span className="bg-white text-[14px] rounded-4xl px-2">
          Highlights
        </span>
        {highlights?.map((item, idx) => (
          <h4 key={idx}>{item}</h4>
        ))}
      </div>

      {image && (
        <div className="w-full max-w-64 h-72">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={title}
          />
        </div>
      )}
    </div>
  );
};
