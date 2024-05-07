import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import TherapistsPage from './pages/TherapistsPage'
import OurServicesPage from './pages/OurServicesPage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AuthYourAppointmentPageHandler from './lib/middleware/AuthYoutAppointmentPageHandler'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { authset } from "./lib/store/slice/auth.slice";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/therapists",
    element: <TherapistsPage/>
  },
  {
    path: "/our-services",
    element: <OurServicesPage/>
  },
  {
    path: "/your-appointments",
    element: <AuthYourAppointmentPageHandler/>
  },
  {
    path: "/about-us",
    element: <AboutUsPage/>
  },
  {
    path: "/contact-us",
    element: <ContactUsPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  }
])

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
    <div className='min-h-screen flex flex-col font-sans'>
      <Navbar/>
      <RouterProvider router={routers}/>
      <Footer/>
    </div>
  )
}

export default App
