import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react' // We need to import this router for making POST request with our form
import CategoryDropdown from '../../Components/Category';
import SubcategoryDropdown from '../../Components/SubcategoryDropdown';


export default function Dashboard({ auth, objectItem, categories }) {

    const [state, setState] = useState(objectItem);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState("");



    // Category Select Option
    const handleCategoryChange = (category) => {

        setSelectedCategory(category);
        setSelectedSubcategory("");
    };


    const handleSubcategoryChange = (subcategory) => {
        setSelectedSubcategory(subcategory);
    };

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value

        console.log(value)
        console.log(key)
        setState(state => ({
            ...state,
            [key]: value,
        }))

        console.log(state)

    }


    // Add default value on page load
    useEffect(() => {
        console.log(selectedCategory)
      // console.log('category changed')
    }, [selectedCategory]);

    useEffect(() => {
        // simulate an API call to get subcategories based on the selected category
        const getSubcategories = async () => {
            const subcategories = await fetch(`/api/subcategories?category=${props.category}`)
                .then((response) => response.json());
            setSubcategories(subcategories);
        };
        getSubcategories();
    }, [selectedCategory]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Object Crud</h2>}
        >
            <Head title="Object Crud" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-12 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Crud</div>
                        <form>
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        This information will be displayed publicly so be careful what you share.
                                    </p>

                                    <div className="border-b border-gray-900/10 pb-12">
                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div className="sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Object Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        onChange={handleChange}
                                                        value={state.name}
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        autoComplete="given-name"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Object Code
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        onChange={handleChange}
                                                        value={state.code}
                                                        type="text"
                                                        name="code"
                                                        id="code"
                                                        autoComplete="given-name"
                                                        className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Category
                                                </label>

                                                <div className="mt-2">

                                                <CategoryDropdown categories={categories} onCategoryChange={handleCategoryChange} />


                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label htmlFor="subcategory" className="block  w-full text-sm font-medium leading-6 text-gray-900">
                                                    Sub Category
                                                </label>
                                                <div className="mt-2">

                                                    {selectedCategory && (
                                                        <SubcategoryDropdown
                                                            category={selectedCategory}
                                                            onSubcategoryChange={handleSubcategoryChange}
                                                        />
                                                    )}


                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                                        <div className="col-span-full">
                                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                                description
                                            </label>
                                            <div className="mt-2">
                                            <textarea
                                                // onChange={handleTextAreaChange}
                                                value={state.description}
                                                id="description"
                                                name="description"
                                                rows={3}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                defaultValue={state.description}
                                            />
                                            </div>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                Photo
                                            </label>
                                            <div className="mt-2 flex items-center gap-x-3">
                                                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                >
                                                    Change
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                Cover photo
                                            </label>
                                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                <div className="text-center">
                                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
