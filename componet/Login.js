"use client"
import { useRouter } from 'next/navigation';


const Login = () => {
    const router=useRouter();
    const handleSubmit=(e)=>{
e.preventDefault();
router.push("/BlogA");
    }
  return (
    <div className='login_area'>
        <div className="login_box">
            <h2>Enter</h2>
            <form className='login_form'onSubmit={handleSubmit} action="">
                <input type="text" placeholder='Username' />
                <input type="password" placeholder=' Password' />
                <button type="submit">Enter</button>
            </form>
            <p>Create an new Account <span className='redic'>Register</span> </p>
        </div>

    </div>
  )
}

export default Login;