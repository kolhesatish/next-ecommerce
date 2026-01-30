"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { NavMenu } from "../navbar.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ResTopNavbar = ({ data }: { data: NavMenu }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Image
          priority
          src="/icons/menu.svg"
          height={100}
          width={100}
          alt="menu"
          className="max-w-[22px] max-h-[22px]"
        />
      </SheetTrigger>

      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader className="mb-10">
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link
                href="/"
                className={cn([integralCF.className, "text-2xl"])}
              >
                Techligence
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col items-start">

          {/* MAIN NAV ITEMS */}
          {data.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "MenuItem" && (
                <SheetClose asChild>
                  <Link
                    href={item.url ?? "/"}
                    className="mb-4 text-base"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              )}

              {item.type === "MenuList" && (
                <div className="mb-4 w-full">
                  <Accordion type="single" collapsible>
                    <AccordionItem
                      value={item.label}
                      className="border-none"
                    >
                      <AccordionTrigger className="text-left p-0 py-0.5 font-normal text-base">
                        {item.label}
                      </AccordionTrigger>

                      <AccordionContent className="p-4 pb-0 border-l flex flex-col">
                        {item.children.map((itemChild) => (
                          <SheetClose
                            key={itemChild.id}
                            asChild
                            className="w-fit py-2 text-base"
                          >
                            <Link href={itemChild.url ?? "/"}>
                              {itemChild.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* ADMIN (MOBILE) */}
          <div className="mt-6 pt-4 border-t w-full">
            <SheetClose asChild>
              <Link
                href={isAdmin ? "/admin" : "/admin/login"}
                className="
                  block
                  px-2 py-3
                  text-blue-600
                  font-medium
                  text-base
                "
              >
                Admin
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResTopNavbar;
