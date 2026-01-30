import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  {
    title: "Humanoid Robots",
    slug: "/shop?category=humanoid-robots",
  },
  {
    title: "Robotic Actuators",
    slug: "/shop?category=robotic-arms-actuators",
  },
  {
    title: "Mobile Robots",
    slug: "/shop?category=mobile-robots",
  },
  {
    title: "Robotic Arms",
    slug: "/shop?category=robot-arms",
  },
  {
    title: " Robot Hands & Grippers ",
    slug: "/shop?category=grippers-hands",
  },
  {
    title: "3D & Robotics Kits",
    slug: "/shop?category=diy-kits",
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/70">
      <h3 className="font-semibold text-black mb-2">
        Robot Categories
      </h3>

      {categoriesData.map((category, idx) => (
        <Link
          key={idx}
          href={category.slug}
          className="flex items-center justify-between py-2 hover:text-black transition-colors"
        >
          {category.title}
          <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
