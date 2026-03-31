// app/product/[id]/page.js

async function getProductDetail(id) {
    console.log(id)
  const res = await fetch(`https://fakestoreapiserver.reactbd.org/api/products/${id}`);
  if (!res.ok) throw new Error("Không tìm thấy sách");

  const result = await res.json();
  // Xử lý vụ có .data như bạn nói ở đây:
  return result.data || result; 
}

export default async function ProductDetailPage({ params }) {
  // params.id chính là cái [id] trên thư mục
  console.log(params)
  const { id } = await params; 
  const product = await getProductDetail(id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="300" />
      <p><strong>Mô tả:</strong> {product.description}</p>
      <p><strong>Giá:</strong> ${product.price}</p>
      
      <a href="/" style={{ color: 'blue' }}>← Quay lại danh sách</a>
    </div>
  );
}