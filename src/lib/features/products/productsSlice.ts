import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* ---------- TYPES ---------- */

export type Availability = {
  label: string;   // e.g. "In Stock"
  value: string;   // e.g. "in_stock"
};

export type Customization = {
  label: string;   // e.g. "Standard Build"
  value: string;   // e.g. "standard"
};

/* ---------- STATE ---------- */

interface ProductsState {
  availabilitySelection: Availability | null;
  customizationSelection: Customization | null;
}

/* ---------- INITIAL STATE ---------- */

const initialState: ProductsState = {
  availabilitySelection: null,
  customizationSelection: null,
};

/* ---------- SLICE ---------- */

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAvailabilitySelection: (
      state,
      action: PayloadAction<Availability>
    ) => {
      state.availabilitySelection = action.payload;
    },

    setCustomizationSelection: (
      state,
      action: PayloadAction<Customization>
    ) => {
      state.customizationSelection = action.payload;
    },

    clearProductFilters: (state) => {
      state.availabilitySelection = null;
      state.customizationSelection = null;
    },
  },
});

/* ---------- EXPORTS ---------- */

export const {
  setAvailabilitySelection,
  setCustomizationSelection,
  clearProductFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
