import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#1c1b1b] to-[#1a1717] flex items-center text-lg sticky top-0 z-50">
    <div className="flex justify-between items-center mx-auto w-full">
      <Link href="/" className="text-white ml-5 cursor-pointer no-underline text-4xl flex items-center">Happy Tummy</Link>
      
      <ul className="flex gap-2.5 list-none text-center justify-end">
        <li className="h-20">
          <Link href="/infant" className="text-white flex items-center no-underline py-2 px-4 h-full">
            Infant Recipes
          </Link>
        </li>
        <li className="h-20">
          <Link href="/adult" className="text-white flex items-center no-underline py-2 px-4 h-full">
            Adult Recipes
          </Link>
        </li>
      </ul>
    </div>
  </div>
  
  );
};

export default Header;
