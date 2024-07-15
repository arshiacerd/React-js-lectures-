import React, { useState } from "react";

const FormHandle = () => {
  let [ firstName, setFirstName ] = useState("");
  let [ lastName, setLastName ] = useState("");
  function handleChange1(e) {
    setFirstName(e.target.value)
  }
  function handleChange2(e) {
    setLastName(e.target.value)
  }
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="firstname"
          onChange={(e) => handleChange1(e)}
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={(e) => handleChange2(e)}
        />
        <button>add</button>
      </form>
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
    </>
  );
};

export default FormHandle;
