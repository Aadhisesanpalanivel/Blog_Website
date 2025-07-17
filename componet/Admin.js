"use client"
import { useRouter } from "next/navigation";
const AdminNavbar=()=>{
    const router=useRouter();
    return(
        <div className="navbar">
            <div className="navbar-item1 navbar-logo">Food Blog- Admin</div>
            <div className="navbar-item2">
                <div className="nav-item" onClick={()=>{
                    router.push("/BlogA");
                }}>Food Blog</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/create");
                }}>Create</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/update");
                }}>Update</div>
                <div className="nav-item" onClick={() => {
                    router.push("/DeleteA");
                }}>Delete</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/BlogU");
                }}>Logout</div>
            </div>
        </div>
    )
}
export default AdminNavbar;