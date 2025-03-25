"use client";

import Link from "next/link";
import HamburgerIcon from "./HamburgerIcon";
import { useState } from "react";

export interface NavbarProps {
  items?: NavbarItem[];
}

export interface NavbarItem {
  title: string;
  to: string;
}

export default function Navbar({ items }: NavbarProps) {
  // const items: String[] = ["首頁", "偉特介紹", "磁磚分類", "服務流程", "聯絡我們"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col gap-0.5 border-b-1 p-1.5 bg-csecondary-4">

      <div className="flex md:flex-row justify-between md:justify-center items-center px-4 my-2 md:mb-4">
        <h1 className="text-4xl font-bold">偉特磁磚</h1>
        <HamburgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
      </div>

      <div className="hidden md:flex flex-row gap-18 justify-center">
        {items?.map((item, index) => (
          <Link href={item.to.toLowerCase()} key={index}>
            {item.title}
          </Link>
        ))}
      </div>

      {/* 漢堡選單 */}
      <div className={`md:hidden ${isMenuOpen ? "flex" : "hidden"} flex-col items-center gap-4 py-4`}>
        {items?.map((item, index) => (
          <Link href={item.to.toLocaleLowerCase()} key={index} onClick={() => setIsMenuOpen(false)}>
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
