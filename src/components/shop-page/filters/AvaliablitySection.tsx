"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux"; // ⭐ ADD THIS
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";
import { setAvailabilitySelection } from "@/lib/features/products/productsSlice"; // ⭐ ADD THIS (fix path if needed)

type Availability = {
  label: string;
  value: string;
};

const availabilityOptions: Availability[] = [
  { label: "In Stock", value: "in-stock" },
  { label: "Out of Stock", value: "out-of-stock" },
  { label: "Pre Order", value: "pre-order" },
];

const AvailabilitySection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const dispatch = useDispatch(); // ⭐ ADD THIS

  return (
    <Accordion type="single" collapsible defaultValue="filter-availability">
      <AccordionItem value="filter-availability" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Availability
        </AccordionTrigger>

        <AccordionContent className="pt-4 pb-0">
          <div className="flex flex-col space-y-2">
            {availabilityOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSelected(option.value); // existing UI state
                  dispatch(setAvailabilitySelection(option)); // ⭐ THIS IS THE IMPORTANT PART
                }}
                className={cn(
                  "flex items-center justify-between rounded-lg border px-4 py-3 text-sm transition-colors",
                  selected === option.value
                    ? "border-black bg-black text-white"
                    : "border-black/20 text-black/70 hover:border-black"
                )}
              >
                {option.label}
                {selected === option.value && (
                  <IoMdCheckmark className="text-base" />
                )}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AvailabilitySection;
