import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";

const SignIn = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle Sign Up / Sign In
  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    registerUser(email, password)
      .then((res) => {
        return updateUserProfile(name, photo);
      })
      .then(() => {
        setSuccess("User signed up successfully!");
        // Clear form
        setName("");
        setPhoto("");
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex flex-col lg:flex-row">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold">Sign Up / Sign In</h1>
          <p className="text-gray-500 mt-2">
            Create your account to access your collection and enjoy movies!
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form className="card-body" onSubmit={handleSignUp}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {/* Photo URL */}
              <label className="label mt-2">Photo URL</label>
              <input
                type="url"
                className="input input-bordered w-full"
                placeholder="https://example.com/photo.jpg"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />

              {/* Email */}
              <label className="label mt-2">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password */}
              <label className="label mt-2">Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500 mt-2">{error}</p>}
              {success && <p className="text-green-500 mt-2">{success}</p>}

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Sign Up
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
