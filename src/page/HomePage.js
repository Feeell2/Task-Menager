import React from "react";
import ReactTypingEffect from "react-typing-effect";

const HomePage = () => {
  return (
    <>
      <ReactTypingEffect
        className="mainText"
        text="Witaj w menedżerze zadań"
        speed="180"
        eraseDelay={9999999 * 10000}
      />{" "}
      <ReactTypingEffect
        className="secondText"
        text="Możesz tutaj stworzyć projekt i rozłożyć go na poszczególne zadania"
        speed="180"
        eraseDelay={9999999 * 10000}
      />
    </>
  );
};

export default HomePage;
