import { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import AppRoutes from "./routes/AppRoutes";
import Settings from "@/modules/admin/components/Settings";
import { Toaster } from "react-hot-toast";
import { initMockClientAccount } from "@/modules/auth/mock/initMockClientAccount";
import { initMockOperatorAccount } from "@/modules/auth/mock/initMockOperatorAccount";

function App() {
  useEffect(() => {
    try {
      initMockClientAccount();
      initMockOperatorAccount();
      console.log("Mock accounts initialized");
    } catch (error) {
      console.error("Error initializing mock accounts:", error);
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <CookieBanner />
      <Toaster />
      <Settings />
      <AppRoutes />
    </>
  );
}

export default App;
