import "./navbar.scss";
import { paths } from "../../lib/paths";
import { Logo } from "../common/Logo";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

export const NavBar = () => {
  const { left, right } = paths;
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function toggleMobileNav() {
    setMobileNavOpen((prev) => !prev);
  }

  return (
    <nav>
      <div className="left">
        <Link to="/">
          <Logo full />
        </Link>

        <ul>
          {left.map(({ name, href }) => (
            <li key={name} className={href.replace("/", "")}>
              <NavLink to={href}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <ul className="right">
        {right.map(({ name, href }) => (
          <li key={name} className={href.replace("/", "")}>
            <NavLink to={href}>{name}</NavLink>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={toggleMobileNav}
        className={`hamburgerBtn ${mobileNavOpen && "open"}`}
      >
        {mobileNavOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        <span className="sr-only">Close Navigation Menu</span>
      </button>

      <ul className={`mobileNav ${mobileNavOpen && "open"}`}>
        {[...left, ...right].map(({ name, href }) => (
          <li key={name}>
            <NavLink to={href}>{name}</NavLink>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setMobileNavOpen(false)}
        className={`backdrop ${mobileNavOpen && "open"}`}
      >
        <span className="sr-only">Close Navigation Menu</span>
      </button>
    </nav>
  );
};
