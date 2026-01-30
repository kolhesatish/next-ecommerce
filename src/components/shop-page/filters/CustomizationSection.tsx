"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux"; // ⭐ ADD
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { setCustomizationSelection } from "@/lib/features/products/productsSlice"; // ⭐ ADD

type CustomizationOption = {
  label: string;
  value: string;
};

const buildTypes: CustomizationOption[] = [
  { label: "Standard Build", value: "standard" },
  { label: "Custom Build", value: "custom" },
];

const CustomizationSection = () => {
  const [selected, setSelected] = useState<string>("standard");
  const dispatch = useDispatch(); // ⭐ ADD

  return (
    <Accordion type="single" collapsible defaultValue="filter-customization">
      <AccordionItem value="filter-customization" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Customization
        </AccordionTrigger>

        <AccordionContent className="pt-4 pb-0">
          <div className="flex items-center flex-wrap">
            {buildTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                className={cn(
                  "bg-[#F0F0F0] m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] transition-colors",
                  selected === type.value && "bg-black font-medium text-white"
                )}
                onClick={() => {
                  setSelected(type.value); // UI highlight
                  dispatch(setCustomizationSelection(type)); // 🔥 Save to Redux
                }}
              >
                {type.label}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomizationSection;
