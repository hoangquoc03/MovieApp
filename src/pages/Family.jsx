import {
  Bell,
  CalendarCheck,
  CheckCircle,
  Clock,
  Phone,
  Send,
  Video,
} from "lucide-react";
import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
function Family() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "lan", text: "Bà đã uống thuốc sáng rồi nhé con ❤️" },
    { id: 2, sender: "me", text: "Dạ bà nhớ uống thuốc chiều đúng giờ nha." },
  ]);
  const weeklyData = [
    { day: "T2", percent: 100 },
    { day: "T3", percent: 80 },
    { day: "T4", percent: 90 },
    { day: "T5", percent: 70 },
    { day: "T6", percent: 100 },
    { day: "T7", percent: 85 },
    { day: "CN", percent: 95 },
  ];

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: message,
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <div className="p-6 lg:p-10 bg-slate-50 min-h-screen">
      {/* ===== HEADER ===== */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl font-semibold">
            L
          </div>
          <div>
            <h2 className="text-xl font-semibold">Nguyễn Thị Lan</h2>
            <p className="text-slate-500 text-sm">72 tuổi • Cao huyết áp</p>
            <p className="text-green-600 text-sm font-medium mt-1">
              ✔ Hôm nay đã uống 1/3 liều thuốc
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
      <div className="grid md:grid-cols-3 gap-6 mb-6">
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
      {/* ===== WEEKLY CHART ===== */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border mb-6">
        <h3 className="text-lg font-semibold mb-4">
          Biểu đồ tuân thủ thuốc 7 ngày
        </h3>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="percent"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* ===== FAMILY CHAT ===== */}
      <div className="bg-white rounded-2xl shadow-sm border flex flex-col h-[450px]">
        {/* Header */}
        <div className="p-4 border-b font-semibold">💬 Chat với bà Lan</div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${
                  msg.sender === "me"
                    ? "bg-blue-600 text-white"
                    : "bg-white border"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Nhắn tin cho bà..."
            className="flex-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Family;
