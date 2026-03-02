import { ChevronUp, LogOut, Settings } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserDropdown() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔹 Xoá token (nếu bạn có dùng)
    localStorage.removeItem("token");

    // 🔹 Chuyển về trang đăng nhập
    navigate("/login");
  };

  return (
    <div className="relative border-t p-4">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <img
          src="https://ui-avatars.com/api/?name=Nguyen+Van+A"
          alt="User"
          className="w-9 h-9 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-900">Nguyễn Thị Lan</p>
          <p className="text-xs text-slate-400">72 Tuổi • Nhóm A+</p>
        </div>

        <ChevronUp
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <div className="absolute bottom-16 left-4 right-4 bg-white rounded-xl border shadow-lg">
          <button className="flex items-center gap-2 w-full px-4 py-3 hover:bg-slate-50 text-sm">
            <Settings size={16} /> Cài đặt
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-3 hover:bg-rose-50 text-rose-600 text-sm"
          >
            <LogOut size={16} /> Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
