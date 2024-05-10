import "./App.css";
import HomePage from "./pages/HomePage";
import TherapistsPage from "./pages/TherapistsPage";
import OurServicesPage from "./pages/OurServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthYourAppointmentPageHandler from "./lib/middleware/AuthYoutAppointmentPageHandler";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { authset } from "./lib/store/slice/auth.slice";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authset(true));
      } else {
        dispatch(authset(false));
      }
    });
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/therapists" element={<TherapistsPage />} />
        <Route path="/our-services" element={<OurServicesPage />} />
        <Route path="/your-appointments" element={<AuthYourAppointmentPageHandler />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
