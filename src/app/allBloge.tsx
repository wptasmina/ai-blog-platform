import React from "react";

interface Blog {
    id: number;
    title: string;
    summary: string;
    author: string;
    date: string;
}

const blogs: Blog[] = [
    {
        id: 1,
        title: "Understanding React Server Components",
        summary: "A deep dive into React Server Components and how they change the way we build web apps.",
        author: "Jane Doe",
        date: "2024-06-01",
    },
    {
        id: 2,
        title: "TypeScript Tips for Beginners",
        summary: "Essential TypeScript tips to help you write safer and cleaner code.",
        author: "John Smith",
        date: "2024-05-28",
    },
    // Add more blog objects as needed
];

const AllBloge: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">All Blogs</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id} className="border p-4 my-8">
                        <h2>{blog.title}</h2>
                        <p>{blog.summary}</p>
                        <small>
                            By {blog.author} on {blog.date}
                        </small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllBloge;