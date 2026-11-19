
import React from "react";
import { Eye, Pencil, Trash2, CarFront } from "lucide-react";

const CarTable = ({ cars = [], onEdit, onDelete, onView }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">

      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">Vehicle</th>
              <th className="px-6 py-4">Seller</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            {cars.length > 0 ? (
              cars.map((car) => (
                <tr key={car.id ?? car._id} className="hover:bg-gray-50">

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {car.images?.[0] ? (
                        <img
                          src={car.images[0]}
                          alt={car.carBrand}
                          className="w-14 h-12 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-14 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                          <CarFront className="text-gray-400" />
                        </div>
                      )}

                      <div>
                        <p className="font-semibold text-gray-800">
                          {car.carBrand || "Unknown Brand"}
                        </p>
                        <p className="text-xs text-gray-500">
                          {car.company || "No seller"}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {car.company || "N/A"}
                  </td>

                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    ${Number(car.price || 0).toLocaleString()}
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                      {car.type || "Vehicle"}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">

                      <button
                        type="button"
                        onClick={() => onView?.(car)}
                        title="View car"
                        className="text-gray-400 hover:text-blue-700"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={() => onEdit?.(car)}
                        title="Edit car"
                        className="text-gray-400 hover:text-green-700"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete?.(car)}
                        title="Delete car"
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center">
                  <CarFront size={35} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500 font-medium">
                    No cars found
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Your vehicle listings will appear here.
                  </p>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CarTable;
