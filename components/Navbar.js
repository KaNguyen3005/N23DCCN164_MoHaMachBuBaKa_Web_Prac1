export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">MyStore</h1>
      <div className="space-x-6 hidden md:flex">
        <a href="#" className="hover:text-blue-500">
          Home
        </a>
        <a href="#" className="hover:text-blue-500">
          Products
        </a>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Cart (0)
      </button>
    </nav>
  );
}
