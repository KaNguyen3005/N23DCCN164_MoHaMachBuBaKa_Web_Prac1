async function getProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  return res.json();
}
export default async function HomePage() {
  const products = await getProducts();
  // ... render ...
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
