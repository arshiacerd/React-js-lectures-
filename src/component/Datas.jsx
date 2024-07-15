import React from "react";
import Data from "./Data";
const Datas = () => {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];
  return (
    <>
      <ul>
        {people.map((x,index) => (
          <Data x={x}  index={index}  />
        ))}
      </ul>
    </>
  );
};

export default Datas;
