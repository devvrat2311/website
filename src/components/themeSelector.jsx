import { useState, useEffect } from "react";

function ThemeSelector() {
  const themesList = [
    { name: "light" },
    { name: "nord" },
    { name: "peach" },
    { name: "midnight" },
  ]; //array of theme objects to .map() over and render theming options
  let sizeOfList = themesList.length;
  sizeOfList *= 25;
  let heightOfList = sizeOfList + "px";

  const [themesOpen, setThemesOpen] = useState(false);

  const toggleThemeMenu = () => {
    setThemesOpen(!themesOpen);
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme",
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newtheme) => {
    newtheme += "-theme";
    setTheme(newtheme);
  };

  return (
    <>
      <div className="themeContainer">
        <button className="themesBtn" onClick={toggleThemeMenu}>
          {theme.substring(0, theme.length - 6)}
        </button>
        <ul
          style={themesOpen ? { height: heightOfList } : { height: 0 }}
          className={`themesMenu ${themesOpen ? "open" : ""}`}
        >
          {themesList.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => {
                  handleThemeChange(item.name);
                  toggleThemeMenu();
                }}
                // onMouseOver={() => handleThemeChange(item.name)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ThemeSelector;
