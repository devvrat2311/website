import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CoolBtn from "./coolBtn";

function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const address = useLocation();
  const { pathname } = address;

  const menuItems = [
    //an array of objects
    { name: "Home", path: "/home", pathalias: "/", icon: "" },
    { name: "About", path: "/about", icon: "󱟄" },
    { name: "Blogs", path: "/blogs", icon: "" },
    { name: "Projects", path: "/projects", icon: "" },
  ];
  return isMobile ? (
    <>
      <CoolBtn onclickfunction={toggleMenu} />
      <div className={`fullscreen-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map(({ name, path, pathalias }) => (
            <li key={name}>
              <a href={pathname !== path ? path : null}>
                {pathname === path || pathname === pathalias ? "󰫣 " : null}
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <ul
      style={{
        fontSize: "1.5rem",
        fontFamily: "Josefin Sans",
      }}
    >
      {menuItems.map(({ name, path, pathalias }) => (
        <li key={name}>
          <a
            href={pathname !== path ? path : null}
            className={
              pathname === path || pathname === pathalias
                ? "highlightCurrentLink"
                : "underline"
            }
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;
