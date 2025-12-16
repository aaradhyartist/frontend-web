import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { loginUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser({ email, password });
      dispatch(
        setUser({
          user: data.user,
          accessToken: data.accessToken,
          refreshToken: data?.refreshToken,
        })
      );
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (err) {
      
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
       const res = await axios.post("http://localhost:5000/api/auth/google", {
        credential: credentialResponse.credential,
      }); 
      const data = res.data.data;
      console.log('=======data============',data);
      
      dispatch(
        setUser({
          user: data,
          accessToken: data?.accessToken,
          refreshToken: data?.refreshToken,
        })
      );

      navigate("/");
    } catch (err) {
      console.log("Google login error:", err);
      toast.error(err.message || "Faild to login");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/3 flex items-center justify-center p-8 bg-gradient-to-tr from-blue-400 to-purple-500">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Login to your account
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* OR separator */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login */}
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => toast.error("Faild to login")}
          />

          <p className="text-center text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Gradient / Image */}
      <div className="hidden md:flex w-1/1  bg-white  items-center justify-center relative">
        <img
          src="https://images.unsplash.com/photo-1581090700227-d67d33f0d47d?auto=format&fit=crop&w=800&q=80"
          alt="Login Illustration"
          className="w-3/4 h-3/4 object-cover rounded-l-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
