import { MessageCircle, ShieldCheck } from "lucide-react";

function FamilyPage() {
  return (
    <section className="flex-1 bg-slate-50 p-6 overflow-y-auto">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">
        Kết nối gia đình
      </h2>

      {/* ===== AI TÓM TẮT ===== */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <ShieldCheck className="text-emerald-600 mt-1" size={20} />
          <div>
            <h3 className="font-semibold text-emerald-700">
              AI tóm tắt tình trạng hôm nay
            </h3>
            <p className="text-sm text-emerald-700 mt-1">
              Người dùng đã uống đầy đủ thuốc buổi sáng. Chỉ số sức khỏe ổn
              định, không có cảnh báo khẩn cấp. Gia đình có thể yên tâm theo
              dõi.
            </p>
          </div>
        </div>
      </div>

      {/* ===== 3 CARD TRẠNG THÁI ===== */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-sm text-slate-500">Uống thuốc</p>
          <p className="text-emerald-600 font-semibold mt-1">Đã uống</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-sm text-slate-500">Chỉ số sức khỏe</p>
          <p className="text-emerald-600 font-semibold mt-1">Bình thường</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-sm text-slate-500">Cảnh báo</p>
          <p className="text-slate-400 font-semibold mt-1">Không có</p>
        </div>
      </div>

      {/* ===== NGƯỜI THÂN ===== */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 mb-6">
        <h3 className="font-medium text-slate-800 mb-4">
          Người thân được kết nối
        </h3>

        <div className="space-y-4">
          {[
            {
              name: "Nguyễn Văn A",
              role: "Con trai",
              color: "bg-emerald-100 text-emerald-700",
            },
            {
              name: "Trần Thị B",
              role: "Con gái",
              color: "bg-teal-100 text-teal-700",
            },
          ].map((person, index) => (
            <div key={index} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${person.color}`}
              >
                {person.name.charAt(0)}
              </div>
              <div>
                <p className="text-slate-800 font-medium">{person.name}</p>
                <p className="text-xs text-slate-400">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CHAT ===== */}
      <div className="bg-white rounded-2xl border border-slate-200 flex flex-col">
        <div className="p-5 border-b border-slate-100">
          <h3 className="font-medium text-slate-800 flex items-center gap-2">
            <MessageCircle size={18} />
            Chat gia đình + AI hỗ trợ
          </h3>
        </div>

        <div className="p-5 space-y-4 text-sm flex-1">
          {/* AI */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-semibold">
              AI
            </div>
            <div className="bg-slate-100 p-3 rounded-xl max-w-md">
              Hôm nay sức khỏe ổn định. Gia đình không cần lo lắng 🍀
            </div>
          </div>

          {/* A */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-semibold">
              A
            </div>
            <div className="bg-emerald-50 p-3 rounded-xl max-w-md">
              Ba/mẹ nhớ uống đủ nước nha 💚
            </div>
          </div>

          {/* B */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold">
              B
            </div>
            <div className="bg-blue-50 p-3 rounded-xl max-w-md">
              Tối con sẽ gọi về nhé!
            </div>
          </div>
        </div>

        {/* INPUT */}
        <div className="p-4 border-t border-slate-100">
          <input
            type="text"
            placeholder="Nhập tin nhắn cho gia đình hoặc hỏi AI..."
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>
    </section>
  );
}

export default FamilyPage;
