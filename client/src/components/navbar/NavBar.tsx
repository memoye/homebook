import { Logo } from "../common/Logo";
import "./navbar.scss";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div className="left">
        <Link to="/">
          <Logo full />
        </Link>
      </div>
      <div className="right">Right</div>
    </nav>
  );
};
