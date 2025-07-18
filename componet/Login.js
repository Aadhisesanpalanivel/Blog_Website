"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const staticUsername = "Blogger";
    const staticPassword = "blogger1234";

    if (username === staticUsername && password === staticPassword) {
      setError("");
      router.push("/BlogA");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className='login_area'>
      <div className="login_box">
        <h2>Login</h2>
        <form className='login_form' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='👨‍💻 Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder='🔐 Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>Create a new Account <span className='redic'>Sign up</span></p>
      </div>
    </div>
  );
};

export default Login;