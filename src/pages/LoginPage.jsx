import {
  Bell,
  CalendarCheck,
  Check,
  HeartHandshake,
  HelpCircle,
  Pill,
  Video,
} from "lucide-react";
import { useState } from "react";

function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="bg-slate-50 text-slate-800 antialiased h-screen flex overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-5/12 bg-slate-100 flex-col relative border-r border-slate-200 overflow-hidden">
        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center h-full px-12">
          <div className="mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border mb-6">
              <HeartHandshake className="text-blue-600 w-8 h-8" />
            </div>

            <h2 className="text-3xl font-semibold text-slate-900 mb-4 leading-tight">
              Người bạn đồng hành <br />
              <span className="text-blue-600">chăm sóc sức khỏe</span> mỗi ngày.
            </h2>

            <p className="text-lg text-slate-500">
              Xóa bỏ nỗi lo quên thuốc và kết nối bác sĩ mọi lúc.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border w-full max-w-md">
            <div className="flex justify-between mb-6 border-b pb-4">
              <div>
                <p className="text-xs text-slate-500 uppercase">Hôm nay</p>
                <p className="text-lg font-semibold">Lịch uống thuốc</p>
              </div>
              <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <CalendarCheck className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center p-3 bg-blue-50 border rounded-xl">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center mr-4">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm line-through opacity-70">
                    Thuốc huyết áp
                  </p>
                  <p className="text-xs text-slate-500">Đã uống lúc 08:00</p>
                </div>
                <Pill className="w-4 h-4 text-blue-400" />
              </div>

              <div className="flex items-center p-3 bg-white border rounded-xl shadow-sm">
                <div className="w-6 h-6 border-2 border-slate-300 rounded mr-4"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Vitamin tổng hợp & Bổ não
                  </p>
                  <p className="text-xs text-blue-600">12:30 - Sau ăn trưa</p>
                </div>
                <Bell className="w-4 h-4 text-amber-500 animate-pulse" />
              </div>
            </div>

            {/* Doctor */}
            <div className="mt-6 pt-4 border-t flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-semibold text-white bg-blue-500">
                M
              </div>
              <div>
                <p className="text-xs font-medium">
                  Bác sĩ Minh đang trực tuyến
                </p>
                <p className="text-xs text-slate-500">Sẵn sàng tư vấn ngay</p>
              </div>
              <button className="ml-auto p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                <Video className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-7/12 flex flex-col bg-white h-full overflow-y-auto">
        {/* Header */}
        <div className="p-6 lg:p-10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
              A
            </div>
            <span className="font-semibold text-xl text-slate-900">
              ANNHIEN
            </span>
          </div>

          <button className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Hướng dẫn sử dụng
          </button>
        </div>

        {/* FORM */}
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full px-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold mb-3">Chào mừng trở lại</h1>
            <p className="text-slate-500">
              Đăng nhập để theo dõi sức khỏe và lịch thuốc.
            </p>
          </div>

          {/* Tabs */}
          <div className="bg-slate-100 p-1 rounded-xl flex mb-8">
            <button
              onClick={() => setIsRegister(false)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${
                !isRegister
                  ? "bg-white shadow-sm text-slate-900"
                  : "text-slate-500"
              }`}
            >
              Đăng nhập
            </button>

            <button
              onClick={() => setIsRegister(true)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${
                isRegister
                  ? "bg-white shadow-sm text-slate-900"
                  : "text-slate-500"
              }`}
            >
              Đăng ký mới
            </button>
          </div>

          {!isRegister ? (
            // ================= LOGIN FORM =================
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Số điện thoại hoặc Email
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Nhập số điện thoại hoặc email của bạn"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>

              <button className="w-full py-3.5 rounded-xl text-white bg-slate-900 hover:bg-slate-800 font-semibold transition">
                Đăng nhập
              </button>
            </form>
          ) : (
            // ================= REGISTER FORM =================
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Ví dụ: Nguyễn Văn A"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Số điện thoại để nhận nhắc nhở"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Ít nhất 6 ký tự"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Nhập lại mật khẩu
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Nhập lại để xác nhận"
                />
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border">
                <input type="checkbox" className="mt-1 h-5 w-5" />
                <p className="text-sm text-slate-600">
                  Con cháu hoặc người thân có thể hỗ trợ quản lý tài khoản này
                </p>
              </div>

              <button className="w-full py-3.5 rounded-xl text-white bg-slate-900 hover:bg-slate-800 font-semibold transition">
                Hoàn tất đăng ký
              </button>
            </form>
          )}

          <p className="mt-8 text-center text-sm text-slate-500">
            Chưa có tài khoản?{" "}
            <span className="text-blue-600 cursor-pointer">Đăng ký ngay</span>
          </p>
        </div>

        <div className="p-6 text-center text-xs text-slate-400">
          © 2024 AnTam Health Assistant.
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
