import {
  Activity,
  LayoutGrid,
  MessageSquareHeart,
  Pill,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import UserDropdown from "./UserDropdown";
function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b">
        <div className="font-semibold text-lg text-slate-900">ANNHIEN</div>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-2 text-sm">
        <NavItem icon={<LayoutGrid size={18} />} label="Tổng quan" to="/" />
        <NavItem
          icon={<MessageSquareHeart size={18} />}
          label="Tư vấn AI"
          to="/ai"
        />
        <NavItem
          icon={<Activity size={18} />}
          label="Chỉ số sức khỏe"
          to="/health"
        />
        <NavItem
          icon={<Pill size={18} />}
          label="Lịch uống thuốc"
          to="/medication"
        />
        <NavItem
          icon={<Users size={18} />}
          label="Kết nối gia đình"
          to="/family"
        />
      </nav>

      <UserDropdown />
    </aside>
  );
}

function NavItem({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
          isActive
            ? "bg-emerald-50 text-slate-900 font-semibold"
            : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
export default Sidebar;
