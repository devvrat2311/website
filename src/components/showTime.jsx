import { useEffect, useState} from "react";

function ShowTime({Position}) {
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
    <span className={`${Position? "showtime" : "showtimetwo"}`}>{time} </span>
  )
}

export default ShowTime;
