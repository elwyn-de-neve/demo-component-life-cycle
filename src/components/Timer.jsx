import { useEffect } from "react";

function Timer({ setTimer, timer }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      // clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h2>Timer: {timer}</h2>
    </>
  );
}

export default Timer;
