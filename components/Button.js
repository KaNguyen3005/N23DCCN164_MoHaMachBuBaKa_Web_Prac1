export default function Button({ children, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white"
      : "border border-blue-600 text-blue-600";
  return (
    <button
      className={`${styles} px-4 py-2 rounded-md hover:opacity-80 transition`}
    >
      {children}
    </button>
  );
}
