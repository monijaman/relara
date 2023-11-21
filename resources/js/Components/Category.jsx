import React, {useState, useEffect} from 'react';

const CategoryDropdown = ({ onCategoryChange}) => {
     const [categories, setCategories] = useState("");


    const handleCategoryChange = (event) => {
        //  setSelectedCategory(event.target.value);
        onCategoryChange(event.target.value);

    };


    // get categories
    useEffect(() => {
        const getCategories = async () => {
            const categories = await fetch(`/api/categories`)
                .then((response) => response.json());
            setCategories(categories);
        };

        getCategories();


    }, []);


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

                {categories && categories.map((item, index) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}

            </select>
        </>
    );
};

export default CategoryDropdown;
