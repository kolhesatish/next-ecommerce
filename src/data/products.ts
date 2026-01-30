import { Product } from "@/types/product.types";

/**
 * Master Product List – Techligence
 * Categories:
 * - new-arrival
 * - top-selling
 * - innovation
 */
export const products: Product[] = [
  /* ================================
     🔹 NEW ARRIVALS
  ================================= */
  {
    id: 1,
    title: "MiniDuck Robot",
    srcUrl: "/images/miniduck.jpeg",
    gallery: [
      "/images/miniduck.jpeg",
      "/images/miniduck1.jpeg",
      "/images/miniduck2.jpeg",
    ],
    price: 24,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    category: "new-arrival",
  },
  {
    id: 2,
    title: "ComboBot – Object Avoider & Line Follower",
    srcUrl: "/images/combobot.jpeg",
    gallery: [
      "/images/combobot.jpeg",
      "/images/combobot1.jpeg",
      "/images/combobot3.jpeg",
    ],
    price: 54,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
    category: "new-arrival",
  },
  {
    id: 3,
    title: "Mobile Robot Chassis GR1",
    srcUrl: "/images/mobrobot.jpeg",
    gallery: [
      "/images/mobrobot.jpeg",
      "/images/mobrobot1.jpeg",
      "/images/mobrobot3.jpeg",
    ],
    price: 46,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    category: "new-arrival",
  },
  {
    id: 4,
    title: "Smart Robot Actuator P2",
    srcUrl: "/images/actuator1.jpeg",
    gallery: [
      "/images/actuator1.jpeg",
      "/images/actuator2.jpeg",
    ],
    price: 36,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
    category: "new-arrival",
  },

  /* ================================
     🔹 TOP SELLING
  ================================= */
  {
    id: 5,
    title: "PIHU 1 Humanoid Robot",
    srcUrl: "/images/pihu.jpeg",
    gallery: [
      "/images/pihu.jpeg",
      "/images/pihu1.jpeg",
      "/images/pihu2.jpeg",
      "/images/pihu3.jpeg",
    ],
    price: 120,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5,
    category: "innovation",
  },
  {
    id: 6,
    title: "3D Printed Human Mask",
    srcUrl: "/images/mask.jpeg",
    gallery: [
      "/images/mask.jpeg",
      "/images/mask1.jpeg",
      "/images/mask2.jpeg",
    ],
    price: 90,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4,
    category: "top-selling",
  },
  {
    id: 7,
    title: "4-Finger Robotic Hand",
    srcUrl: "/images/fingerrobo.jpeg",
    gallery: [
      "/images/fingerrobo.jpeg",
      "/images/fingerrobo1.jpeg",
      "/images/fingerrobo2.jpeg",
    ],
    price: 40,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    category: "innovation",
  },

  /* ================================
     🔹 INNOVATION
  ================================= */
  {
    id: 8,
    title: "Biped Robot v1",
    srcUrl: "/images/biped.jpeg",
    gallery: [
      "/images/biped.jpeg",
      "/images/biped1.jpeg",
      "/images/biped2.jpeg",
    ],
    price: 45,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
    category: "innovation",
  },
  {
    id: 9,
    title: "Robot Dog – Proto X1",
    srcUrl: "/images/robodog.jpeg",
    gallery: [
      "/images/robodog.jpeg",
      "/images/robodog1.jpeg",
    ],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    category: "innovation",
  },
  {
    id: 10,
    title: "Smart Robot Actuator P1",
    srcUrl: "/images/actuatorp2.jpeg",
    gallery: [
      "/images/actuatorp2.jpeg",
      "/images/actuatorp21.jpeg",
      "/images/actuatorp22.jpeg",
    ],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5,
    category: "innovation",
  },
];
