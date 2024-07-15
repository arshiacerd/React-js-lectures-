import React from "react";

const Fruits = () => {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  //   to filter out data
  let data = people.filter((x) => x.profession == "chemist");

  return (
    <>
      <ul>
        {people
          .filter((x) => x.profession == "mathematician")
          .map((data, index) => (
            <li key={index}>
              {data.name} {data.profession}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Fruits;
