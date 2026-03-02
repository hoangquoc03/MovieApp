import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AIPage from "./pages/AIPage";
import Dashboard from "./pages/Dashboard";
import FamilyPage from "./pages/FamilyPage";
import HealthPage from "./pages/HealthPage";
import LoginPage from "./pages/LoginPage";
import MedicationPage from "./pages/MedicationPage";
import Family from "./pages/Family";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/family" element={<Family />} />
        {/* Route KHÔNG có navbar */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route CÓ navbar */}
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/ai"
          element={
            <Layout>
              <AIPage />
            </Layout>
          }
        />
        <Route
          path="/health"
          element={
            <Layout>
              <HealthPage />
            </Layout>
          }
        />
        <Route
          path="/medication"
          element={
            <Layout>
              <MedicationPage />
            </Layout>
          }
        />
        <Route
          path="/family"
          element={
            <Layout>
              <FamilyPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
