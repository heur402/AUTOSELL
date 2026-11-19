
import React from "react";
import { Users, Search, MoreHorizontal } from "lucide-react";

const ManageSellers = () => {
  const sellers = [
    { id: 1, name: "Premium Motors", email: "premium@example.com", cars: 12 },
    { id: 2, name: "Auto World", email: "autoworld@example.com", cars: 8 },
    { id: 3, name: "Elite Cars", email: "elite@example.com", cars: 15 },
  ];

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manage Sellers</h1>
        <p className="text-sm text-gray-500 mt-1">
          View and manage vehicle sellers.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-xl border">
          <Users className="text-[#083463]" />
          <p className="text-sm text-gray-500 mt-3">Total Sellers</p>
          <h2 className="text-2xl font-bold">{sellers.length}</h2>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border">
        <div className="relative mb-5">
          <Search className="absolute left-3 top-3 text-gray-400" size={19} />
          <input
            placeholder="Search sellers..."
            className="w-full sm:w-80 pl-10 pr-4 py-3 border rounded-xl outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="p-4">Seller</th>
                <th className="p-4">Email</th>
                <th className="p-4">Cars Listed</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {sellers.map((seller) => (
                <tr key={seller.id}>
                  <td className="p-4 font-semibold">{seller.name}</td>
                  <td className="p-4 text-gray-500">{seller.email}</td>
                  <td className="p-4">{seller.cars}</td>
                  <td className="p-4">
                    <button type="button" title="More actions">
                      <MoreHorizontal />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ManageSellers;
