import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
            <Header />

            <div className="w-11/12 max-w-[670px] mt-[100px] flex justify-start items-start flex-col gap-y-6">
                <div>
                    <button
                        className="rounded-md border px-4 py-1 text-lg"
                        onClick={() => navigation(-1)}
                    >
                        Back
                    </button>
                </div>

                <h2 className="text-2xl font-bold">
                    Blogs Tagged #<span>{category}</span>
                </h2>
            </div>

            <div className="mt-[-70px]">
                <Blogs />
            </div>

            <Pagination />
        </div>
    );
};

export default CategoryPage;
