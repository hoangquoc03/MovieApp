import { Clock, Pill } from "lucide-react";

function MedicationPage() {
  return (
    <section className="flex-1 bg-slate-50 p-6 overflow-y-auto">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">
        Lịch uống thuốc
      </h2>

      {/* ===== Nhắc thuốc hiện tại ===== */}
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
            <Pill className="w-5 h-5 text-rose-600" />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-rose-700">Đến giờ uống thuốc</h3>
            <p className="text-sm text-rose-600 mt-1">🕒 08:00 sáng</p>

            <ul className="text-sm text-slate-700 mt-3 space-y-1">
              <li>• Thuốc huyết áp – 1 viên</li>
              <li>• Thuốc tim mạch – 1 viên</li>
            </ul>

            <button className="mt-4 w-full py-3 bg-rose-600 text-white rounded-xl font-medium hover:bg-rose-700 transition">
              Đã uống thuốc
            </button>
          </div>
        </div>
      </div>

      {/* ===== Các mốc giờ trong ngày ===== */}
      <div className="space-y-4">
        {[
          { time: "12:00 trưa", note: "Thuốc tiểu đường – 1 viên" },
          { time: "18:00 chiều", note: "Vitamin – 1 viên" },
          { time: "21:00 tối", note: "Thuốc ngủ – 1 viên" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center"
          >
            <div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Clock size={16} />
                {item.time}
              </div>
              <p className="text-sm text-slate-500 mt-1">{item.note}</p>
            </div>

            <span className="text-xs text-slate-400">Chưa tới giờ</span>
          </div>
        ))}
      </div>

      {/* ===== Tiến trình ===== */}
      <div className="mt-8 bg-white p-5 rounded-2xl border border-slate-200">
        <h3 className="font-medium text-slate-800 mb-3">Tiến trình hôm nay</h3>

        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 w-1/4" />
        </div>

        <p className="text-sm text-slate-500 mt-2">1 / 4 lần đã uống hôm nay</p>
      </div>
    </section>
  );
}

export default MedicationPage;
