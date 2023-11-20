import React, { useState } from 'react';

const CategoryDropdown = ({categories, onCategoryChange}) => {
   //  const [selectedCategory, setSelectedCategory] = useState("");



    const handleCategoryChange = (event) => {
      //  setSelectedCategory(event.target.value);
        onCategoryChange(event.target.value);

    };


    return (
        <>
            <select
                id="category"
                name="category"
            //    value={selectedCategory}
                onChange={handleCategoryChange}
                autoComplete="category-name"
                className="block w-full max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
            >

                {categories.map((item, index) => (
                    <option value={item.id}>{item.name}</option>
                ))}

            </select>
        </>
    );
};

export default CategoryDropdown;
