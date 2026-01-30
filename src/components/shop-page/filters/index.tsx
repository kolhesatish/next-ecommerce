"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";

import RobotCategorySection from "@/components/shop-page/filters/RobotCategorySection";
import PriceSection from "@/components/shop-page/filters/PriceSection";
import AvailabilitySection from "./AvaliablitySection";
import CustomizationSection from "./CustomizationSection";

import { clearProductFilters } from "@/lib/features/products/productsSlice"; // adjust path if needed

const Filters = () => {
  const dispatch = useDispatch();

  const handleApplyFilters = () => {
    // Right now selections are already being stored in Redux
    // So this button can be used to trigger product refresh / API call later
    console.log("Filters applied ✅");
  };

  const handleClearFilters = () => {
    dispatch(clearProductFilters());
  };

  return (
    <>
      <hr className="border-t-black/10" />

      <RobotCategorySection />
      <hr className="border-t-black/10" />

      <PriceSection />
      <hr className="border-t-black/10" />

      <AvailabilitySection />
      <hr className="border-t-black/10" />

      <CustomizationSection />

      <Button
        type="button"
        onClick={handleApplyFilters}
        className="bg-black w-full rounded-full text-sm font-medium py-4 h-12 mt-4"
      >
        Apply Filters
      </Button>

      <Button
        type="button"
        onClick={handleClearFilters}
        variant="outline"
        className="w-full rounded-full text-sm font-medium py-4 h-12 mt-2"
      >
        Clear Filters
      </Button>
    </>
  );
};

export default Filters;
