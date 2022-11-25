import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";

const SignUp = () => {

  const {createUser} = useContext(authContext);

  // signup form handle
  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // create user with email and password 
    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.log(error))

  }

  return (
    <div>
      <div className="hero max-w-6xl mx-auto min-h-screen">
        <div className="hero-content w-1/2 flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <label className="label-text">Email</label>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <label className="label-text">Password</label>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
                <p className="mt-5">
                  have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
