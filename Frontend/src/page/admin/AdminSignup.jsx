
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarFront } from "lucide-react";

const AdminSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend navigation only.
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border">

        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#083463] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
            <CarFront size={30} />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">AUTOSELL</h1>
          <p className="text-gray-500 text-sm mt-2">Administrator Registration</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Full name"
            className="w-full p-3 border rounded-xl outline-none focus:border-[#083463]"
          />

          <input
            type="email"
            required
            placeholder="Email address"
            className="w-full p-3 border rounded-xl outline-none focus:border-[#083463]"
          />

          <input
            type="password"
            required
            minLength={8}
            placeholder="Password (minimum 8 characters)"
            className="w-full p-3 border rounded-xl outline-none focus:border-[#083463]"
          />

          <input
            type="password"
            required
            minLength={8}
            placeholder="Confirm password"
            className="w-full p-3 border rounded-xl outline-none focus:border-[#083463]"
          />

          <button className="w-full bg-[#083463] hover:bg-blue-800 text-white py-3 rounded-xl font-semibold">
            Create Admin Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already registered?{" "}
          <Link to="/admin/login" className="text-[#083463] font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default AdminSignup;
