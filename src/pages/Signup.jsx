import BgImg from "../components/bgImg";

const Signup = () => {
  return (
    <>
      <BgImg />
      <div className="Signup-Container">
        <div className="Signup-Content">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Watch anywhere, Cancel anytime</h4>
          <h6>
            Ready to watch? enter your email to create or restart membership
          </h6>
        </div>
        <div className="form">
          <input type="email" placeholder="Email Address" name="email" />
          <input type="password" placeholder="Password" />
          <button>Get Started</button>
          <button>Log In</button>
        </div>
      </div>
    </>
  );
};
export default Signup;
