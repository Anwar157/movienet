import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      toast.success("Profile update is Successfully!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
        My Profile
      </h2>

      {/* Profile Photo */}
      <div className="flex justify-center mb-4">
        <img
          src={user?.photoURL}
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-indigo-700 shadow"
        />
      </div>

      {/* User Info */}
      <p className="text-center text-gray-700 mb-6">
        <span className="font-semibold">{user?.email}</span>
      </p>

      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Name */}
        <div>
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            className="input input-bordered w-full mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="font-semibold">Profile Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full mt-1"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>

        {/* Update Button */}
        <button className="btn bg-indigo-700 text-white w-full">
          Update Profile
        </button>
      </form>

      {/* Success / Error Message */}
      {success && (
        <p className="mt-4 text-green-600 font-semibold text-center">
          {success}
        </p>
      )}
      {error && (
        <p className="mt-4 text-red-600 font-semibold text-center">{error}</p>
      )}
    </div>
  );
};

export default Profile;
