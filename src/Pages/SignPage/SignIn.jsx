import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const { registerUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // 1. Create Account
      const res = await registerUser(email, password);

      // 2. Update profile
      await updateUserProfile(name, photo);
      toast.success("Account created successfully!");

      // 3. Redirect to home
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  //  Google Sign In
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col text-center">
        <h1 className="text-3xl font-bold mb-4">Create Account</h1>

        <div className="card bg-base-100 w-full max-w-sm shadow-xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />

            <label className="label">Photo URL</label>
            <input
              type="url"
              className="input input-bordered "
              placeholder="https://example.com/photo.jpg"
              onChange={(e) => setPhoto(e.target.value)}
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password with Eye Icon */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-xl">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            {/* Create Account Button */}
            <button className="btn btn-neutral mt-4 w-full bg-orange-800 border-none">
              Create Account
            </button>

            {/* GOOGLE LOGIN BUTTON */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline mt-2 w-full bg-green-200 border-none">
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
