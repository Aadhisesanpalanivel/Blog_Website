"use client";
import { useRouter } from "next/navigation";
import datas from "../Blog/blog.json";

const Blog = () => {
    const router=useRouter();
  return (
    <div className="blog-wrapper">
      <h1 className="blog-heading">Food Blog</h1>
      <div className="blog-grid">
        {datas.map((index) => (
          <div className="blog-card" key={index.id} onClick={()=>{
            router.push(`/BlogU/${index.id}?img=${index.image}&title=${index.title}&summary=${index.summary}`);
          }}>
            <img src={index.image} alt={index.summary} className="blog-img" />
            <div className="blog-content">
              <h2 className="blog-title">{index.content}</h2>
              <p className="blog-summary">{index.date}</p>
              <div className="blog-footer">
                <span>{index.tags}</span>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;