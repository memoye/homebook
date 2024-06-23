import "./navbar.scss";
import { paths } from "../../lib/paths";
import { Logo } from "../common/Logo";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const { left, right } = paths;
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { pathname } = useLocation();

  function toggleMobileNav() {
    setMobileNavOpen((prev) => !prev);
  }

  const user = true;

  useEffect(() => {
    if (mobileNavOpen) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "auto";
    }

    return () => {
      window.document.body.style.overflowY = "auto";
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  return (
    <nav className="desktopNav">
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
        {user ? (
          <div className="user">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt="a man"
            />
            <span>{"John Doe"}</span>
            <Link className="profile" to={"/profile"}>
              <span className="notification">3</span>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          right.map(({ name, href }) => (
            <li key={name} className={href.replace("/", "")}>
              <NavLink to={href}>{name}</NavLink>
            </li>
          ))
        )}
      </ul>

      <button
        type="button"
        onClick={toggleMobileNav}
        className={`hamburgerBtn ${mobileNavOpen ? "open" : ""}`}
      >
        {mobileNavOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        <span className="sr-only">Close Navigation Menu</span>
        <span className={`mobileNotification ${mobileNavOpen ? "hide" : ""}`}>
          3
        </span>
      </button>
      <ul className={`mobileNav ${mobileNavOpen && "open"}`}>
        {user
          ? [...left, { name: "Profile", href: "/profile" }].map(
              ({ name, href }) => (
                <li key={name}>
                  <NavLink to={href}>{name}</NavLink>
                  {href === "/profile" && (
                    <span
                      style={{
                        background: "red",
                        fontSize: "0.75rem",
                        borderRadius: "50%",
                        padding: "0.05em",
                        width: "1rem",
                        height: "1rem",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      3
                    </span>
                  )}
                </li>
              )
            )
          : [...left, ...right].map(({ name, href }) => (
              <li key={name}>
                <NavLink to={href}>{name}</NavLink>
              </li>
            ))}
        {user && (
          <li>
            <NavLink to={"#"} className="logoutBtn">
              Logout
            </NavLink>
          </li>
        )}
      </ul>

      <button
        type="button"
        onClick={() => setMobileNavOpen(false)}
        className={`backdrop ${mobileNavOpen ? "open" : ""}`}
      >
        <span className="sr-only">Close Navigation Menu</span>
      </button>
    </nav>
  );
};
