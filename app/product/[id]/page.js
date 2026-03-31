// app/product/[id]/page.js
import Link from "next/link";

async function getProductDetail(id) {
  const res = await fetch(
    `https://fakestoreapiserver.reactbd.org/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Không tìm thấy sản phẩm");

  const result = await res.json();
  return result.data || result;
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProductDetail(id);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-sm font-medium text-blue-600 transition hover:text-blue-800"
        >
          ← Quay lại danh sách
        </Link>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Image */}
            <div className="bg-gray-100 p-4 object-containt md:p-6">
              <div className="flex h-full items-center justify-center overflow-hidden rounded-2xl bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[350px] w-full object-cover md:h-[500px]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 md:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {product.isNew && (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    New
                  </span>
                )}
                <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold capitalize text-pink-700">
                  {product.category}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold capitalize text-purple-700">
                  {product.type}
                </span>
              </div>

              <h1 className="text-2xl font-bold leading-tight text-gray-900 md:text-4xl">
                {product.title}
              </h1>

              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Thương hiệu:{" "}
                <span className="font-medium text-gray-700">{product.brand}</span>
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-3xl font-bold text-red-600">
                  ${product.discountedPrice || product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                )}

                {product.price && product.discountedPrice && (
                  <span className="rounded-lg bg-red-100 px-2 py-1 text-sm font-semibold text-red-600">
                    -{Math.round(
                      ((product.price - product.discountedPrice) / product.price) * 100
                    )}
                    %
                  </span>
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <p>
                  ⭐ <span className="font-semibold">{product.rating}</span>/5
                </p>
                <p>
                  Kho:{" "}
                  <span
                    className={`font-semibold ${
                      product.stock > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.stock > 0 ? `${product.stock} sản phẩm` : "Hết hàng"}
                  </span>
                </p>
              </div>

              <div className="mt-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">Mô tả</h2>
                <p className="leading-7 text-gray-600">{product.description}</p>
              </div>

              {product.size?.length > 0 && (
                <div className="mt-6">
                  <h2 className="mb-3 text-lg font-semibold text-gray-800">Kích thước</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.size.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-black hover:text-black"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
                  Thêm vào giỏ hàng
                </button>
                <button className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}