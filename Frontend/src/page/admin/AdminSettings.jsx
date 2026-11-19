
import React, { useState } from "react";
import { Settings, User, Bell, Save } from "lucide-react";

const AdminSettings = () => {
  const [profile, setProfile] = useState({
    name: "Administrator",
    email: "admin@example.com",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings are currently frontend-only.");
  };

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your administrator preferences.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border rounded-2xl p-6 space-y-6">

        <div className="flex items-center gap-3 border-b pb-4">
          <User className="text-[#083463]" />
          <div>
            <h2 className="font-bold">Admin Profile</h2>
            <p className="text-sm text-gray-500">Your account information</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full mt-2 border rounded-xl p-3 outline-none focus:border-[#083463]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full mt-2 border rounded-xl p-3 outline-none focus:border-[#083463]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 border-b pb-4">
          <Bell className="text-[#083463]" />
          <div>
            <h2 className="font-bold">Notifications</h2>
            <p className="text-sm text-gray-500">Notification preferences</p>
          </div>
        </div>

        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input type="checkbox" defaultChecked className="accent-[#083463]" />
          Receive new car listing notifications
        </label>

        <button className="flex items-center gap-2 bg-[#083463] text-white px-5 py-3 rounded-xl font-semibold">
          <Save size={18} />
          Save Settings
        </button>

      </form>
    </div>
  );
};

export default AdminSettings;
