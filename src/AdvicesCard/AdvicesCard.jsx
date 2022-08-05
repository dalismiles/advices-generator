import { useState, useEffect } from "react";
import Button from "../Button/Button";

import "./index.css";

const AdvicesCard = () => {
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [count]); // eliminating [] we will generate an infinite loop ∞

  return (
    <div className="AdvicesCard">
      <div className="AdvicesCard__content">
        <h4 className="AdvicesCard__nr">ADVICE #{data?.slip?.id}</h4>
        <h2 className="AdvicesCard__text">"{data?.slip?.advice}"</h2>
        <Button onClick={() => setCount(count + 1)} />
      </div>
    </div>
  );
};

export default AdvicesCard;
