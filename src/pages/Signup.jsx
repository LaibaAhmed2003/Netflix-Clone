import BgImg from "../components/bgImg";
import Header from "./Header";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = async () => {
    console.log(formValues);
  };
  return (
    <div className="signup-main-div" showPassword={showPassword}>
      <BgImg />
      <div className="Signup-Container">
        <Header login />
        <div className="Signup-Content">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Watch anywhere, Cancel anytime</h4>
          <h6>
            Ready to watch? enter your email to create or restart membership
          </h6>
          <div
            className="form"
            style={{
              gridTemplateColumns: showPassword ? "1fr 1fr" : "2fr 1fr",
            }}
          >
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword && (
              <button className="btn" onClick={() => setShowPassword(true)}>
                Get Started
              </button>
            )}
            <button className="loginbtn" onClick={handleSignIn}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
