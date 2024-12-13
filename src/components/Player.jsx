import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [player, setPlayer] = useState({ name: null});
  // const handleChange = (e) => {
  //   setPlayer((prev) => ({ ...prev, name: e.target.value, submit: false }));
  // };
  const handleClick = () => {
    setPlayer((prev) => ({...prev, name: playerName.current.value}))
  };
  return (
    <section id="player">
      <h2>Welcome {player.name ?? "Guest"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
