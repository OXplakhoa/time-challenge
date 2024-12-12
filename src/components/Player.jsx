import { useState } from "react";

export default function Player() {
  const [player,setPlayer] = useState({name:'',submit: false})
  const handleChange = (e) => {
    setPlayer((prev) => ({...prev,name: e.target.value}));
  }
  const handleClick = () => {
    if (!player.submit) {
      setPlayer((prev) => ({ ...prev, submit: !prev.submit }));
    }
  };
  return (
    <section id="player">
      <h2>Welcome {player.submit ? player.name : "Guest"}</h2>
      <p>
        <input type="text" value={player.name} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
