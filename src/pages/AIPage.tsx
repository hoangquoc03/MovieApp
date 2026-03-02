import { HeartPulse, Mic, Send } from "lucide-react";
import { useState } from "react";

function AIPage() {
  const [mode, setMode] = useState("chat");

  return (
    <section className="flex-1 overflow-hidden bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Bác sĩ AI tư vấn sức khỏe
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Nhắn tin hoặc nói chuyện trực tiếp với bác sĩ AI
        </p>
      </div>

      {/* Switch Buttons */}
      <div className="px-6 py-4 bg-white border-b border-slate-100 flex gap-3">
        <button
          onClick={() => setMode("chat")}
          className={`flex-1 py-3 rounded-xl font-semibold transition ${
            mode === "chat"
              ? "bg-slate-900 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          Nhắn tin
        </button>

        <button
          onClick={() => setMode("voice")}
          className={`flex-1 py-3 rounded-xl font-semibold transition ${
            mode === "voice"
              ? "bg-slate-900 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          Nói chuyện
        </button>
      </div>

      {/* CONTENT */}
      {mode === "chat" ? (
        <>
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-teal-600" />
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm max-w-xl">
                Chào cô Lan 🌸 Hôm nay cô thấy thế nào?
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-slate-900 text-white p-4 rounded-2xl max-w-xl">
                Tôi hơi chóng mặt buổi sáng
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="bg-white border-t border-slate-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                className="flex-1 px-4 py-3 border border-slate-200 rounded-xl"
              />
              <button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center">
                <Send size={18} />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Voice Mode UI */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <div className="w-32 h-32 rounded-full bg-rose-100 flex items-center justify-center animate-pulse">
              <Mic className="w-12 h-12 text-rose-600" />
            </div>

            <h3 className="text-lg font-semibold text-slate-800">
              Nhấn để bắt đầu nói
            </h3>

            <p className="text-sm text-slate-500 text-center max-w-sm">
              AI sẽ lắng nghe và phản hồi ngay khi cô nói xong.
            </p>

            <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium">
              Bắt đầu ghi âm
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default AIPage;
