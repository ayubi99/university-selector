export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t bottom-0 top-0 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Brand */}
        <div className="text-sm font-semibold text-white tracking-wide">
          UniSelection
        </div>

        {/* Description */}
        <p className="text-xs text-gray-400 text-center max-w-md">
          A centralized university information platform for Khyber Pakhtunkhwa
        </p>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} UniGuide. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
