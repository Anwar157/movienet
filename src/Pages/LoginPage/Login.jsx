import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  // input field state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // AuthContext to login function taken
  const { loginUser } = useContext(AuthContext);

  // Navigate hook
  const navigate = useNavigate();

  // form submit handler
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Firebase Login
      await loginUser(email, password);

      // Success toast
      toast.success("Logged in Successfully!");

      // Redirect to home
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex flex-col">
        <div className="text-center ">
          <h1 className="text-2xl md:text-4xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
