import NavMenu from "./navMenu";
import ThemeSelector from "./themeSelector";
import { useEffect, useState } from "react";

function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formattedTime);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <header>
      <div
        style={{
          flex: 2,
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <p>Dev_023</p>
        <span className="showtime">{time}</span>
      </div>
      <NavMenu />
      <ThemeSelector />
    </header>
  );
}

export default Header;
