import { useState } from "react";

export default function Player() {
  const [name,setName] = useState('')
  const [submit,setSubmit] = useState(false);
  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleClick = () => {
    setSubmit(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submit ? name : "Guest"}</h2>
      <p>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
