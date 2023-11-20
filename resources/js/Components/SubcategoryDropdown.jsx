import React, { useState, useEffect } from 'react';

const SubcategoryDropdown = (props) => {
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        // simulate an API call to get subcategories based on the selected category
        const getSubcategories = async () => {
            const subcategories = await fetch(`/api/subcategories/${props.category}`)
                .then((response) => response.json());
            setSubcategories(subcategories);
        };
        getSubcategories();
    }, [props.category]);

    const handleSubcategoryChange = (event) => {
        setSelectedSubcategory(event.target.value);
        props.onSubcategoryChange(event.target.value);
    };

    return (
        <div>


            <select id="subcategory" value={selectedSubcategory} onChange={handleSubcategoryChange}
                    className="block w-full max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600   sm:text-sm sm:leading-6"

            >
                <option value="">-- Select a subcategory --</option>
                {subcategories.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                        {subcategory.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SubcategoryDropdown;
