import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/slices/auth.slices";

function Auth() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    dispatch(signUp(formData));
    e.preventDefault();
  };

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control mt-1"
                value={formData.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="text"
                name="email"
                className="form-control mt-1"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="text"
                name="password"
                className="form-control mt-1"
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                SignUp
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Auth;
