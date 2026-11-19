
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarFront } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend navigation only.
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border">

        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#083463] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
            <CarFront size={30} />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">AUTOSELL</h1>
          <p className="text-gray-500 text-sm mt-2">Administrator Login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              placeholder="admin@example.com"
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:border-[#083463]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              placeholder="Enter password"
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:border-[#083463]"
            />
          </div>

          <button className="w-full bg-[#083463] hover:bg-blue-800 text-white py-3 rounded-xl font-semibold">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          First administrator?{" "}
          <Link to="/admin/signup" className="text-[#083463] font-semibold">
            Create account
          </Link>
        </p>

        <Link to="/" className="block text-center text-sm text-gray-400 mt-5">
          Back to website
        </Link>

      </div>
    </div>
  );
};

export default AdminLogin;