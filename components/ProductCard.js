import Link from "next/link";

export default function ProductCard({ product }) {

  return (
    <div className="border p-4 rounded-xl shadow-sm hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />
      <h2 className="font-semibold text-lg line-clamp-1">{product.title}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.category.name}</p>3
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-green-600">
          ${product.price}
        </span>
        <Link href={`/product/${product._id}`}>
            <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
            Add +
            </button>
        </Link>
      </div>
    </div>
  );
}
