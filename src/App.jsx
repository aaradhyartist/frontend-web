import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import Contact from "./pages/Contact";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SignUp from "./pages/SignUp";
import { fetchUserProfile } from "./services/authService";
import { setUser } from "./store/authSlice";
import { useEffect } from "react";
import ApiTester from "./pages/ApiTester";
import ContactUs from "./pages/Contact";
import WhatsAppContact from "./pages/Whatsapp";
import BackToTop from "./components/Home/BackToTop.JSX";

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
    <Router>
      <Routes>

        <Route path="contact" element={<ContactUs />} />
        <Route index element={<Home />} />
        <Route path="/" element={<MainLayout />}>

          <Route path="about" element={<About />} />
          <Route path="whatsapp" element={<WhatsAppContact />} />
         
          {/* <Route path="projects" element={<Projects />} /> */}
          {/* <Route path="projects/create" element={<CreateProject />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
  // return (
  //   <Router>
  //     <MainLayout>
  //       <Routes>
  //         <Route path={ROUTES.HOME} element={<Home />} />
  //         <Route path={ROUTES.ABOUT} element={<About />} />
  //         <Route path={ROUTES.CONTACT} element={<Contact />} />
  //         <Route path="*" element={<Navigate to="/" />} />
  //       </Routes>
  //     </MainLayout>
  //   </Router>
  // );
}

export default App;
