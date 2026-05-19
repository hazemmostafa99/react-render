import { useState } from "react";
const initialState = ["Hazem", "Mostafa"];

function UseArrayState() {
  const [persons, setPersons] = useState(initialState);
  const handleClick = () => {
    console.log("Re");

    const newPersons = [...persons];
    newPersons.push("Mohamed");
    setPersons(newPersons);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}

export default UseArrayState;
