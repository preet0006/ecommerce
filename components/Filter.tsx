'use client';

import React, { useEffect, useState } from 'react';



const categories = [
  'T-Shirt',
  'Bermuda',
  'Tennis',
  'Shirt',
  'Pants',
  'Short',
  'Coat',
  'Jacket',
  'Bag',
  'Shoe',
  'Sandal',
  'Blazer',
];

const sizes = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];

const colors = [
  '#FFFFFF', '#000000', '#9CA3AF', '#6B7280',
  '#F5F5DC', '#FACC15', '#DC2626', '#1D4ED8',
  '#065F46', '#78350F', '#C2410C', '#F472B6',
  '#A855F7', '#0F172A', '#D1D5DB',
];



const SectionCard = ({ title, children }: any) => (
  <div className="bg-white rounded-2xl p-6 space-y-6">
    <h5 className="text-xs font-medium tracking-widest uppercase text-gray-700">
      {title}
    </h5>
    {children}
  </div>
);

const Pill = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-5 py-2.5 text-[12px] sm:text-sm rounded-full transition
      ${
        selected
          ? 'bg-black text-white'
          : 'bg-gray-50 text-gray-800 hover:bg-gray-200'
      }`}
  >
    {label}
  </button>
);

const ColorDot = ({
  color,
  selected,
  onClick,
}: {
  color: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={ ` w-6 h-6 sm:w-8 sm:h-8 rounded-full border transition
      ${
        selected
          ? 'ring-2 ring-black ring-offset-2'
          : 'border-gray-200'
      }`}
    style={{ backgroundColor: color }}
  />
);



const FilterPanel = ({ onClose }: { onClose: () => void }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className=" w-full max-w-[360px]  sm:max-w-[420px] mt-16 h-full bg-gray-100 flex flex-col shadow-xl">
     
      <div className="px-6 py-5 flex justify-between items-center bg-white border-b">
        <h4 className="text-base font-medium tracking-wide">Filter</h4>
        <button
          onClick={onClose}
          className="text-sm text-gray-400 hover:text-black"
        >
          To close
        </button>
      </div>

      
      <div className="flex-1   overflow-y-auto px-4 py-8 space-y-10">
       
        <SectionCard title="Category">
          <div className="flex  flex-wrap  gap-4">
            {categories.map((item) => (
              <Pill
              
                key={item}
                label={item}
                selected={selected.includes(item)
                }
                onClick={() => toggle(item)}
              />
            ))}
          </div>
        </SectionCard>

      
        <SectionCard title="Size">
          <div className="flex flex-wrap gap-4">
            {sizes.map((size) => (
              <Pill
                key={size}
                label={size}
                selected={selected.includes(size)}
                onClick={() => toggle(size)}
              />
            ))}
          </div>
        </SectionCard>

       
        <SectionCard title="Colors">
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <ColorDot
                key={color}
                color={color}
                selected={selected.includes(color)}
                onClick={() => toggle(color)}
              />
            ))}
          </div>
        </SectionCard>
      </div>

      
      <div className="sticky  bottom-0 bg-white border-t px-6 py-5">
        <button className="w-full bg-black text-white py-4 rounded-xl text-sm tracking-wide">
          Show Results {selected.length > 0 && `(${selected.length})`}
        </button>
      </div>
    </div>
  );
};



const DesktopFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <button
        onClick={() => setOpen(true)}
        className="fixed hidden sm:flex bottom-6 left-1/2 -translate-x-1/2 z-40 bg-black text-white px-8 py-3 rounded-full shadow-lg"
      >
        Filter
      </button>

      <button className='px-3 sm:hidden  py-1.5 rounded-lg shadow-sm
               bg-white text-xs font-medium
               outline-none cursor-pointer
               hover:bg-gray-100 transition' onClick={() => setOpen(true)}>Filter</button>

     
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30"
        />
      )}

      
      <div
        className={`fixed top-0 left-0 h-full z-40 transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <FilterPanel onClose={() => setOpen(false)} />
      </div>
    </>
  );
};

export default DesktopFilter;
