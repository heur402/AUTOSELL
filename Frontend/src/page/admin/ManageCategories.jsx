
import React, { useState } from "react";
import { Tags, Plus, Trash2 } from "lucide-react";

const ManageCategories = () => {
  const [categories, setCategories] = useState([
    "SUV",
    "Sedan",
    "Hatchback",
    "Pickup",
    "Coupe",
  ]);

  const [newCategory, setNewCategory] = useState("");

  const addCategory = (e) => {
    e.preventDefault();

    const name = newCategory.trim();

    if (!name || categories.some(
      (item) => item.toLowerCase() === name.toLowerCase()
    )) return;

    setCategories((previous) => [...previous, name]);
    setNewCategory("");
  };

  const deleteCategory = (category) => {
    setCategories((previous) =>
      previous.filter((item) => item !== category)
    );
  };

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
        <p className="text-sm text-gray-500 mt-1">
          Organize vehicle listings by category.
        </p>
      </div>

      <form
        onSubmit={addCategory}
        className="bg-white border rounded-2xl p-5 flex flex-col sm:flex-row gap-3"
      >
        <input
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Enter category name"
          className="flex-1 border rounded-xl px-4 py-3 outline-none focus:border-[#083463]"
        />

        <button className="flex items-center justify-center gap-2 bg-[#083463] text-white px-5 py-3 rounded-xl font-semibold">
          <Plus size={18} />
          Add Category
        </button>
      </form>

      <div className="bg-white border rounded-2xl p-5">
        <h2 className="font-bold text-gray-800 mb-4">
          All Categories ({categories.length})
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="flex items-center justify-between border rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <Tags className="text-[#083463]" size={20} />
                <span className="font-medium">{category}</span>
              </div>

              <button
                type="button"
                onClick={() => deleteCategory(category)}
                className="text-gray-400 hover:text-red-600"
                title={`Delete ${category}`}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ManageCategories;
