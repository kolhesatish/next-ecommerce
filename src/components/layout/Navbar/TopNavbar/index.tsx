"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { supabase } from "@/lib/supabase/client";

import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import { MenuItem } from "./MenuItem";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";
import UserMenu from "@/components/auth/UserMenu";
import InputGroup from "@/components/ui/input-group";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

/* ---------------- MENU DATA ---------------- */

const menuData: NavMenu = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Robotics Hardware",
        url: "/shop#robot",
        description: "All physical robotics systems,platforms and components",
      },
      {
        id: 12,
        label: "Advanced Robotics",
        url: "/shop#advrobo",
        description: "High-end robots, kits, and custom-built systems",
      },
      /*{
        id: 13,
        label: "Industrial Robotics",
        url: "/shop#kids-clothes",
        description: "Robots for manufacturing and warehouse automation",
      },
      {
        id: 14,
        label: "Security & Surveillance Robots",
        url: "/shop#bag-shoes",
        description: "Advanced robots for monitoring and safety",
      }, */
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "On Sale",
    url: "/shop#on-sale",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "New Arrivals",
    url: "/shop#new-arrivals",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Innovation",
    url: "/innovation",
    children: [],
  },
];

/* ---------------- COMPONENT ---------------- */

const TopNavbar = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const setAuthState = (user: any) => {
      setUser(user);
      setIsAdmin(user?.app_metadata?.role === "admin");
    };

    supabase.auth.getUser().then(({ data }) => {
      setAuthState(data.user);
    });

    const { data } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setAuthState(session?.user ?? null);
      }
    );

    return () => {
      data?.subscription.unsubscribe();
    };
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 backdrop-blur-sm">
      <div className="flex max-w-frame mx-auto items-center justify-between px-4 xl:px-0 py-4">

        {/* LEFT */}
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={menuData} />
          </div>

          <Link
            href="/"
            className={cn(
              integralCF.className,
              "text-2xl lg:text-[32px] text-gray-900 hover:text-blue-600 transition"
            )}
          >
            Techligence
          </Link>
        </div>

        {/* CENTER MENU */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-8">

            {menuData.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <div className="text-gray-700 hover:text-blue-600 transition">
                    <MenuItem label={item.label} url={item.url} />
                  </div>
                )}

                {item.type === "MenuList" && (
                  <div className="text-gray-700 hover:text-blue-600 transition">
                    <MenuList label={item.label} data={item.children} />
                  </div>
                )}
              </React.Fragment>
            ))}

            

          </NavigationMenuList>
        </NavigationMenu>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <InputGroup className="hidden md:flex bg-gray-100 border border-gray-200 rounded-full px-4">
            <InputGroup.Text>
              <Image
                src="/icons/search.svg"
                height={18}
                width={18}
                alt="search"
                className="opacity-60"
              />
            </InputGroup.Text>
            <InputGroup.Input
              type="search"
              placeholder="Search for products..."
              className="bg-transparent text-gray-700 placeholder:text-gray-400"
            />
          </InputGroup>

          {/* CART */}
          <CartBtn />

          {/* USER */}
          {user ? (
            <UserMenu />
          ) : (
            <Link
              href="/signup"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Image
                src="/icons/user.svg"
                height={22}
                width={22}
                alt="user"
                className="opacity-70"
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
