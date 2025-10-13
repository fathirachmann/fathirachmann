export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-800 bg-gray-950/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-400 md:flex-row">
        <p className="order-2 md:order-1">
          © {year} <span className="text-gray-200">fathirachmann</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
