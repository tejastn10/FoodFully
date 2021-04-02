import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div id="showcase">
        <div className="container">
          <div className="showcase-content">
            <h1>
              <span className="text-primary">Feed Hungry</span> Feel Happy
            </h1>
            <p></p>
            <Link className="btn" to="/login">
              Login
            </Link>
            <p>OR</p>
            <Link to="/register" className="btn">
              Signup
            </Link>
          </div>
        </div>
      </div>

      <section id="features">
        <div className="box bg-light">
          <img
            src="./handshake-regular.svg"
            className="features"
            alt="handhake"
          />
          <h3>Organization</h3>
          <p>
            We have tied up with the trusted organizations to provide good and
            healthy food !!!
          </p>
        </div>
        <div className="box bg-primary">
          <img src="./clock-regular.svg" className="features" alt="clock" />
          <h3>Availability</h3>
          <p>
            Its our effort to provide food to the needy even at the worst time
            and are to help 24/7.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
