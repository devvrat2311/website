import NavMenu from "./navMenu";
// import ThemeSelector from "./themeSelector";
// import { useEffect, useState } from "react";
// import ShowTime from "./showTime";

function Header() {
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
        {/* <span className="showtime">{time}</span> */}
        {/* <ShowTime /> */}
      </div>
      <NavMenu />
      {/* <ThemeSelector Position={1}/> */}
    </header>
  );
}

export default Header;
