// Global state here
// Importing the zustand library for state management
import { create } from "zustand";

// Creating a Zustand store for managing products
export const useProductStore = create((set) => ({
  // Initial state for products
  products: [],

  // Method to set the list of products
  setProducts: (products) => set({ products }),

  // Asynchronous method to create a new product
  createProduct: async (newProduct) => {
    // Validating the new product fields
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill all fields" };
    }

    // Sending a POST request to the server to create a new product
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    // Parsing the JSON response
    const data = await res.json();

    // Updating the state with the newly created product
    set((state) => ({
      products: [...state.products, data],
    }));
    return { success: true, message: "Product created successfully" };
  },
}));
