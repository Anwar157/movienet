import React from "react";

const SignIn = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold">Sign In now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="name input"
                placeholder="Your name"
              />
              {/* photo field */}
              <label className="label">Photo</label>
              <input
                className="input"
                type="url"
                placeholder="https://example.com/your-photo.jpg"
                // value={photoURL}
                // onChange={(e) => setPhotoURL(e.target.value)}
              />

              {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              {/* password */}

              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button type="submit" className="btn btn-neutral mt-4">
                SignIn
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
