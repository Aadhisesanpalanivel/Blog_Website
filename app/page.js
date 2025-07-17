"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  return (
    <div className="imageback">
      <button  className="frontPage" onClick={()=>{
        router.push("/BlogU")
      }}>Click Here|||......</button>
      <p className="p">Visit Food Blogs Now!!!</p>
    </div>
  );
}
