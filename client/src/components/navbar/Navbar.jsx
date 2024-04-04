import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  // const navigate = useNavigate();

  // const signIn = () => {
  //   navigate("/signIn");
  // };
  // const signUp = () => {
  //   navigate("/signUp");
  // };

  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HotelBooking</span>
        </Link>

        

       {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
        {/* <button>logout</button> */}
    </div>
  );
};

export default Navbar;
