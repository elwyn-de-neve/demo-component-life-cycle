import { useState } from "react";
import Timer from "../components/Timer.jsx";

function CleanUp() {
  const [showElement, setShowElement] = useState(true);
  const [timer, setTimer] = useState(0);

  console.log(showElement);
  console.log(timer);

  return (
    <>
      <h1>CleanUp</h1>
      {showElement && <Timer setTimer={setTimer} timer={timer} />}
      <button type="button" onClick={() => setShowElement((prev) => !prev)}>
        Toggle Element
      </button>
    </>
  );
}

export default CleanUp;
