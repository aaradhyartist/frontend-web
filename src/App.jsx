import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import MainLayout from "./layouts/MainLayout";

import { useDispatch, useSelector } from "react-redux";

import { fetchUserProfile } from "./services/authService";
import { setUser } from "./store/authSlice";
import { useEffect } from "react";

import ContactUs from "./pages/Contact";
import WhatsAppContact from "./pages/Whatsapp";

import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Service from "./pages/Service";

function App() {
  const token = useSelector((state) => state.auth.accessToken); // read token from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const { data } = await fetchUserProfile();

          dispatch(
            setUser({
              user: data,
              accessToken: token,
              refreshToken:
                localStorage.getItem(
                  `${import.meta.env.VITE_APP_TOKEN_PREFICS}_refreshToken`
                ) || null,
            })
          );
        } catch (error) {
          console.log("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, [dispatch]);

  // if (token) {
  //   return (
  //     <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
  //       <Router>
  //         <Routes>
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/register" element={<SignUp />} />
  //           <Route path="/api-tester" element={<ApiTester />} />
  //           <Route path="*" element={<Navigate to="/login" />} />
  //         </Routes>
  //       </Router>
  //     </GoogleOAuthProvider>
  //   );
  // }

  return (

    <>
      <div className="relative">
        <Navbar />

        <Routes>


          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
           <Route path="service" element={<Service />} />

          <Route path="contact" element={<ContactUs />} />

          <Route path="/" element={<MainLayout />}>


            <Route path="whatsapp" element={<WhatsAppContact />} />

            {/* <Route path="projects" element={<Projects />} /> */}
            {/* <Route path="projects/create" element={<CreateProject />} /> */}
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </>
  );

}

export default App;
