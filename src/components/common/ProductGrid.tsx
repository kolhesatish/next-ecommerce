import ProductCard from "./ProductCard";
import { Product } from "@/types/product.types";

type ProductGridProps = {
  data: Product[];
};

const ProductGrid = ({ data }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
      {data.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
