import { useEffect, useState } from "react";
import Heading from "../components/Heading.jsx";

function Home() {
  const [showElement, setShowElement] = useState(true);
  // console.log(showElement);

  useEffect(() => {
    // console.log("H2 element rendered");
  }, []);

  return (
    <>
      <h1>Home</h1>
      {showElement && <Heading />}
      <button type="button" onClick={() => setShowElement((prev) => !prev)}>
        Toggle Element
      </button>
    </>
  );
}

export default Home;
