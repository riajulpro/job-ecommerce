"use client";

import Image from "next/image";
import logo from "../app/images/logo.png";
import { Earth, Menu, Moon, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <header className="sticky top-0 z-[20] bg-slate-900 text-white">
      <div className="content">
        <div className="flex items-center justify-between pb-1">
          <div>
            <Image src={logo} alt="TechServer4u" height={32} />
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <div>
              <Input className="hidden md:block" />
              <Search className="md:hidden" />
            </div>
            <Moon />
            <Earth />
            <Link href="/cart" className="relative">
              <Badge className="p-0 absolute text-xs -right-1">
                {cart.items.length}
              </Badge>
              <ShoppingCart />
            </Link>
            <User />
          </div>
        </div>
        <div className="border-t border-slate-700 pt-1 flex items-center justify-between space-x-2">
          <Menu className="hidden md:block" />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col items-center gap-4 text-slate-300">
                  <Link href="/">Home</Link>
                  <Link href="/products">Products</Link>
                  <Link href="/dashboard">Dashboard</Link>
                  <Link href="/">Brands</Link>
                  <Link href="/">Help</Link>
                  <Link href="/">FAQ</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex items-center gap-8 text-slate-300">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/">Brands</Link>
            <Link href="/">Help</Link>
            <Link href="/">FAQ</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
