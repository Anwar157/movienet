import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const SignIn = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // toggle sign in

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

            <label className="label">Password</label>
            <input
              type="password"
              className="input input-bordered"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500">{error}</p>}

            <button className="btn btn-neutral mt-4 w-full">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
