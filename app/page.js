import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  //Do API thầy cung cấp em không sử dụng được nên em sử dụng một API khác tương tự
  const res = await fetch(
    "https://fakestoreapiserver.reactbd.org/api/products",
  );
  const result = await res.json();
  return result.data;
}
export default async function HomePage() {
  const products = await getProducts();
  // ... render ...
  console.log(products);
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}
