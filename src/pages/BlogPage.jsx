import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { loading, setLoading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    const fetchRelatedBlog = async () => {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error aagya in blog id wali call");
            console.log(error);
            setBlog(null);
            setRelatedBlogs([]);
        }

        setLoading(false);
    };

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlog();
        }
    }, [location.pathname]);

    return (
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
            <Header />

            <div className="w-11/12 max-w-[670px] mt-[100px] flex justify-start items-start flex-col gap-y-6">
                <div>
                    <div>
                        <button
                            className="rounded-md border px-4 py-1 text-lg"
                            onClick={() => navigation(-1)}
                        >
                            Back
                        </button>
                    </div>
                </div>

                {loading ? (
                    <p>loading</p>
                ) : blog ? (
                    <div>
                        <BlogDetails post={blog} />

                        <h2 className="mt-[50px] mb-[10px] font-bold text-3xl">Related Blogs</h2>
                        {relatedBlogs.map((post) => (
                            <div key={post.id} className="mt-[30px] mb-[30px]">
                                <BlogDetails post={post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No Blog Found</p>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
