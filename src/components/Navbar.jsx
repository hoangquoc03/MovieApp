import { Bell, Phone } from "lucide-react";

function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="font-semibold text-lg text-slate-900">ANNHIEN</div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-600">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        <button className="flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-2 rounded-full text-sm font-medium border border-rose-100">
          <Phone className="w-4 h-4" />
          Khẩn cấp
        </button>
      </div>
    </header>
  );
}

export default Navbar;
