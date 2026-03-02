import {
  Bell,
  CalendarCheck,
  CheckCircle,
  Clock,
  Phone,
  Video,
} from "lucide-react";

function Family() {
  return (
    <div className="p-6 lg:p-10 bg-slate-50 min-h-screen">
      {/* ===== HEADER ===== */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-semibold">
            M
          </div>
          <div>
            <h2 className="text-xl font-semibold">Nguyễn Văn Minh</h2>
            <p className="text-slate-500 text-sm">72 tuổi • Huyết áp cao</p>
            <p className="text-green-600 text-sm font-medium mt-1">
              ✔ Hôm nay đã uống 1/2 liều thuốc
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ===== MEDICATION TODAY ===== */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Lịch uống thuốc hôm nay</h3>
          <CalendarCheck className="text-blue-600" />
        </div>

        <div className="space-y-4">
          {/* Đã uống */}
          <div className="flex items-center justify-between p-4 bg-green-50 border rounded-xl">
            <div>
              <p className="font-medium">Thuốc huyết áp</p>
              <p className="text-sm text-slate-500">08:00 sáng</p>
            </div>
            <CheckCircle className="text-green-600" />
          </div>

          {/* Sắp tới */}
          <div className="flex items-center justify-between p-4 bg-yellow-50 border rounded-xl">
            <div>
              <p className="font-medium">Vitamin tổng hợp</p>
              <p className="text-sm text-slate-500">12:30 trưa</p>
            </div>
            <Clock className="text-yellow-600" />
          </div>

          {/* Trễ */}
          <div className="flex items-center justify-between p-4 bg-red-50 border rounded-xl">
            <div>
              <p className="font-medium">Thuốc tiểu đường</p>
              <p className="text-sm text-slate-500">18:00 chiều</p>
            </div>
            <Bell className="text-red-600 animate-pulse" />
          </div>
        </div>
      </div>

      {/* ===== STATISTICS ===== */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <p className="text-slate-500 text-sm">Tuân thủ thuốc tuần này</p>
          <h3 className="text-2xl font-semibold mt-2 text-green-600">85%</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <p className="text-slate-500 text-sm">Số lần bỏ lỡ</p>
          <h3 className="text-2xl font-semibold mt-2 text-red-600">2 lần</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <p className="text-slate-500 text-sm">Lần khám gần nhất</p>
          <h3 className="text-2xl font-semibold mt-2">12/03/2026</h3>
        </div>
      </div>
    </div>
  );
}

export default Family;
