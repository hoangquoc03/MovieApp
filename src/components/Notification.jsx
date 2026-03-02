import { BellRing, Check } from "lucide-react";

function Notification() {
  return (
    <div className="fixed bottom-6 right-6 max-w-sm">
      <div className="bg-white rounded-2xl shadow-xl border p-5">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-rose-50 flex items-center justify-center rounded-xl text-rose-600">
            <BellRing />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Đến giờ uống thuốc</h4>
            <p className="text-sm text-slate-500">
              Đã đến giờ uống Thuốc Huyết áp.
            </p>
          </div>
        </div>

        <button className="mt-4 w-full bg-slate-900 text-white py-2 rounded-lg flex items-center justify-center gap-2 text-sm">
          <Check size={16} />
          Đã uống
        </button>
      </div>
    </div>
  );
}

export default Notification;
