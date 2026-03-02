import { Activity, HeartPulse, Moon } from "lucide-react";
function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <section class="space-y-6">
        <div>
          <h1 class="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight">
            Chào bà Lan,
          </h1>
          <p class="text-slate-500 mt-1 text-lg">
            Hôm nay bà có
            <span class="text-teal-600 font-medium">3 việc cần làm</span> để duy
            trì sức khỏe.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row h-auto md:h-80">
          <div class="bg-gradient-to-br from-teal-50 to-slate-50 p-6 md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-100 text-teal-700 text-xs font-medium shadow-sm mb-4">
                <span class="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                AI Trợ lý Sức khỏe
              </div>
              <h3 class="text-lg font-medium text-slate-800 mb-2">
                Tư vấn trực tuyến
              </h3>
              <p class="text-sm text-slate-500 leading-relaxed">
                Con có thể giúp bà phân tích triệu chứng, nhắc lịch thuốc hoặc
                gợi ý bài tập nhẹ nhàng.
              </p>
            </div>
            <div class="mt-4 md:mt-0">
              <div class="flex -space-x-2 overflow-hidden">
                <div class="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-xs">
                  AI
                </div>
                <div class="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-blue-100 flex items-center justify-center text-xs text-blue-600">
                  BS
                </div>
              </div>
              <p class="text-xs text-slate-400 mt-2">
                Dữ liệu được bảo mật y tế
              </p>
            </div>
          </div>

          <div class="flex-1 flex flex-col bg-white">
            <div class="flex-1 p-6 space-y-4 overflow-y-auto">
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-600">
                  <i data-lucide="bot" class="w-4 h-4"></i>
                </div>
                <div class="bg-slate-50 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 leading-relaxed max-w-[90%] border border-slate-100">
                  Chào bà Lan, dựa trên chỉ số đo sáng nay, nhịp tim của bà hơi
                  cao một chút sau khi đi bộ. Bà có thấy mệt hay khó thở không
                  ạ?
                </div>
              </div>

              <div class="flex justify-end gap-2">
                <button class="text-xs bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full text-slate-600 transition-colors">
                  Bà thấy bình thường
                </button>
                <button class="text-xs bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full text-slate-600 transition-colors">
                  Hơi mệt một chút
                </button>
              </div>
            </div>

            <div class="p-4 border-t border-slate-100 bg-white">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Nhập câu hỏi hoặc nhấn micro để nói..."
                  class="w-full bg-slate-50 text-slate-900 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-1 focus:ring-teal-500 border border-slate-200 transition-shadow"
                />
                <button class="absolute right-2 top-2 p-1 text-slate-400 hover:text-teal-600 transition-colors">
                  <i data-lucide="mic" class="w-5 h-5"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-medium text-slate-900">Chỉ số hôm nay</h2>
          <button class="text-sm text-slate-500 hover:text-slate-900">
            Chi tiết →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Heart Rate */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-rose-50 text-rose-600 rounded-lg group-hover:bg-rose-100 transition-colors">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                Bình thường
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-slate-900 tracking-tight">
                72
              </span>
              <span className="text-sm text-slate-500">bpm</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Đo lúc 08:30 sáng</p>
          </div>

          {/* Blood Pressure */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                Ổn định
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-slate-900 tracking-tight">
                120/80
              </span>
              <span className="text-sm text-slate-500">mmHg</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Huyết áp trung bình</p>
          </div>

          {/* Sleep */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-100 transition-colors">
                <Moon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                Cần chú ý
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-slate-900 tracking-tight">
                5.5
              </span>
              <span className="text-sm text-slate-500">giờ</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Giấc ngủ đêm qua</p>
          </div>
        </div>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
        <section class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg font-medium text-slate-900">Lịch uống thuốc</h2>
            <span class="text-xs text-slate-400">Trưa nay</span>
          </div>

          <div class="space-y-4">
            <label class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group select-none">
              <div class="relative flex items-center pt-1">
                <input type="checkbox" class="custom-checkbox sr-only" />
                <div class="w-5 h-5 border-2 border-slate-300 rounded bg-white flex items-center justify-center transition-colors">
                  <i data-lucide="check" class="hidden w-3 h-3 text-white"></i>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-slate-900 group-hover:text-teal-700 transition-colors">
                  Thuốc Huyết áp (Amlodipine)
                </p>
                <p class="text-xs text-slate-500 mt-0.5">
                  1 viên • Sau ăn 30 phút
                </p>
              </div>
              <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <i data-lucide="pill" class="w-4 h-4"></i>
              </div>
            </label>

            <label class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group select-none">
              <div class="relative flex items-center pt-1">
                <input
                  type="checkbox"
                  class="custom-checkbox sr-only"
                  checked=""
                />
                <div class="w-5 h-5 border-2 border-slate-300 rounded bg-white flex items-center justify-center transition-colors">
                  <i data-lucide="check" class="hidden w-3 h-3 text-white"></i>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-slate-500 line-through">
                  Vitamin tổng hợp
                </p>
                <p class="text-xs text-slate-400 mt-0.5">
                  1 viên • Đã uống lúc 11:30
                </p>
              </div>
              <div class="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                <i data-lucide="check" class="w-4 h-4"></i>
              </div>
            </label>

            <label class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group select-none">
              <div class="relative flex items-center pt-1">
                <input type="checkbox" class="custom-checkbox sr-only" />
                <div class="w-5 h-5 border-2 border-slate-300 rounded bg-white flex items-center justify-center transition-colors">
                  <i data-lucide="check" class="hidden w-3 h-3 text-white"></i>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-slate-900 group-hover:text-teal-700 transition-colors">
                  Thuốc bổ xương khớp
                </p>
                <p class="text-xs text-slate-500 mt-0.5">
                  1 viên • Uống với nhiều nước
                </p>
              </div>
              <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <i data-lucide="glass-water" class="w-4 h-4"></i>
              </div>
            </label>
          </div>
        </section>

        <section class="flex flex-col gap-4">
          <div class="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
            <div class="relative z-10">
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-white/20 backdrop-blur px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase">
                  Gợi ý chiều nay
                </span>
              </div>
              <h3 class="text-lg font-medium mb-1">Đi bộ nhẹ nhàng</h3>
              <p class="text-indigo-100 text-sm mb-4">
                Thời tiết hôm nay rất đẹp, bà nên đi bộ khoảng 15 phút tại công
                viên.
              </p>
              <button class="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-colors w-max">
                Xem lộ trình
              </button>
            </div>

            <i
              data-lucide="sun"
              class="absolute -right-4 -top-4 w-32 h-32 text-white/10"
            ></i>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-between shadow-sm">
            <div>
              <h3 class="text-sm font-medium text-slate-900">
                Cuộc hẹn bác sĩ
              </h3>
              <p class="text-xs text-slate-500 mt-1">
                Ngày mai, 09:00 sáng • Bệnh viện K
              </p>
            </div>
            <div class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
              <i data-lucide="calendar" class="w-5 h-5"></i>
            </div>
          </div>
        </section>
      </div>

      {/* Các card chỉ số, AI box, thuốc bạn giữ nguyên JSX */}
    </div>
  );
}

export default Dashboard;
