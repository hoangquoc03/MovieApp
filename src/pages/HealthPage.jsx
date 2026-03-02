import { Activity, Droplet, Heart, Wind } from "lucide-react";

function HealthPage() {
  return (
    <section className="flex-1 bg-slate-50 p-6 overflow-y-auto">
      {/* ===== TÌNH TRẠNG HIỆN TẠI ===== */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <Heart className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-semibold text-emerald-800">
              Tình trạng sức khỏe hiện tại
            </h3>
            <p className="text-sm text-emerald-700">
              💚 Các chỉ số đang trong mức an toàn
            </p>

            <ul className="text-sm text-slate-700 mt-3 space-y-1">
              <li>
                • Nhịp tim: <b>78</b> lần/phút
              </li>
              <li>
                • Huyết áp: <b>120 / 80</b> mmHg
              </li>
              <li>
                • Oxy máu: <b>97%</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== BIỂU ĐỒ 7 NGÀY ===== */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-6">
        <h3 className="font-semibold text-slate-800 mb-1">
          Huyết áp 7 ngày gần đây
        </h3>
        <p className="text-xs text-slate-400 mb-6">Đơn vị: mmHg</p>

        {/* Giả biểu đồ đơn giản */}
        <div className="flex justify-center items-end h-32 gap-4">
          {[110, 115, 118, 120, 117, 119, 116].map((value, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div
                className="w-6 bg-emerald-500 rounded-t"
                style={{ height: `${value / 2}px` }}
              />
              <span className="text-xs text-slate-400">T{index + 2}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-emerald-600 mt-6">
          💚 Huyết áp ổn định trong suốt 7 ngày qua.
        </p>
      </div>

      {/* ===== NÚT AI GIẢI THÍCH ===== */}
      <button className="w-full py-3 mb-8 bg-emerald-100 text-emerald-700 rounded-xl font-medium hover:bg-emerald-200 transition">
        🩺 Bác sĩ AI giải thích các biểu đồ
      </button>

      {/* ===== CHỈ SỐ HÔM NAY ===== */}
      <div>
        <h3 className="font-semibold text-slate-800 mb-1">
          Chỉ số sức khỏe hôm nay
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Cập nhật tự động – dành cho cô Lan
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Nhịp tim */}
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={16} className="text-rose-500" />
              <span className="text-sm text-slate-600">Nhịp tim</span>
            </div>
            <p className="text-2xl font-semibold text-slate-900">78</p>
            <span className="text-xs text-emerald-600">Ổn định</span>
          </div>

          {/* Huyết áp */}
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Heart size={16} className="text-blue-500" />
              <span className="text-sm text-slate-600">Huyết áp</span>
            </div>
            <p className="text-2xl font-semibold text-slate-900">120/80</p>
          </div>

          {/* Đường huyết */}
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Droplet size={16} className="text-indigo-500" />
              <span className="text-sm text-slate-600">Đường huyết</span>
            </div>
            <p className="text-2xl font-semibold text-slate-900">6.1</p>
          </div>

          {/* Oxy máu */}
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Wind size={16} className="text-teal-500" />
              <span className="text-sm text-slate-600">Oxy máu</span>
            </div>
            <p className="text-2xl font-semibold text-slate-900">97%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthPage;
