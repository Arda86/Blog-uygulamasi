import "./BlogList.css";
import BlogItem from "./BlogItem";
import { BlogData } from "../../data/BlogData.js";

import NewForm from "../Form/NewForm.jsx";

function BlogList() {
  return (
    <div className="blog-list">
      <NewForm />
      <h1 className="TitleOfPage">Bloglar</h1>
      <div className="products">
        {BlogData.map((blog) => {
          return (
            <BlogItem
              key={blog.id}
              blog={{ ...blog, date: blog.date.toISOString() }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;
