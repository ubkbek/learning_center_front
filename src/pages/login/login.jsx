import React from "react";
import { useLogin } from "../../context/autentification";
const Login = () => {
  const [token, setToken] = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, password } = e.target;

    fetch("http://localhost:9999/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value.trim(),
        password: password.value.trim(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data?.access_token);
        window.location.href = data.role;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <h1 className="h2 mt-5 pt-5 mb-4 text-dark">Login</h1>

      <p className="d-none">{token}</p>

      <form onSubmit={handleSubmit} className="d-flex flex-column w-25 mb-2">
        <input
          name="name"
          className="p-2 rounded-1 form-control mb-2"
          placeholder="Enter your name"
          required
          type="text"
          autoComplete="off"
        />
        <input
          name="password"
          className="p-2 rounded-1 form-control mb-2"
          placeholder="Enter your password"
          required
          type="text"
          autoComplete="off"
        />
        <button className="p-2 rounded-1 form-control btn btn-success">
          Send
        </button>
      </form>

      <p className="text-info">Forgot your password?</p>
    </div>
  );
};

export default Login;
