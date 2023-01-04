import React, { useState } from "react";
import { HOST, PORT } from "../constants/constant";
import { Wheel } from "react-custom-roulette";
import axios from "axios";

const data = [
  { option: "0", style: { backgroundColor: "green", textColor: "black" } },
  { option: "1", style: { backgroundColor: "blue", textColor: "black" } },
  { option: "2", style: { backgroundColor: "pink", textColor: "black" } },
  { option: "3", style: { backgroundColor: "beige", textColor: "black" } },
  { option: "4", style: { backgroundColor: "brown", textColor: "black" } },
  { option: "5", style: { backgroundColor: "grey", textColor: "black" } },
  { option: "6" },
  { option: "7" },
  { option: "8" },
];

// eslint-disable-next-line import/no-anonymous-default-export
 export default  () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    axios.post('http://localhost:8080/spin').then(function (response) {
      console.log(response.data.number);
      setPrizeNumber(response.data.number);
      setMustSpin(true);
    });
    
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
};
