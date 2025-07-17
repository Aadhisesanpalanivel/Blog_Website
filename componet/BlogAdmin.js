"use client";
import { useRouter } from "next/navigation";
import datas from "../Blog/blog.json";

const BlogA = () => {
    const router=useRouter();
  return (
    <div className="blog-wrapper">
      <h1 className="blog-heading">Food Blog</h1>
      <div className="blog-grid">
        {datas.map((post) => (
          <div className="blog-card" key={post.id} onClick={()=>{
            router.push(`/BlogA/${post.id}?img=${post.image}&title=${post.title}&summary=${post.summary}`);
          }}>
            <img src={post.image} alt={post.title} className="blog-img" />
            <div className="blog-content">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-summary">{post.summary}</p>
              <div className="blog-footer">
                <span>{post.date}</span>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogA;