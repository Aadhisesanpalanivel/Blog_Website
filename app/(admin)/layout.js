const { default: AdminNavbar } = require("@/componet/Admin")

const AdminLayout=({children})=>{
    return(
        <div>
            <AdminNavbar/>
            {children}
        </div>
    )
}
export default AdminLayout;