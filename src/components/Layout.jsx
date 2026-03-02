import Navbar from "./Navbar";
import Notification from "./Notification";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="bg-slate-50 text-slate-600 h-screen flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Navbar />

        <div className="flex-1 overflow-y-auto p-4 md:p-8">{children}</div>

        <Notification />
      </main>
    </div>
  );
}

export default Layout;
