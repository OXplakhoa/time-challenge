import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, target }) {
  const [challenge, setChallenge] = useState({
    started: false,
    expired: false,
  });
  const timer = useRef();
  const dialog = useRef();

  const handleStart = () => {
    setChallenge((prev) => ({ ...prev, started: true, expired: false }));
    timer.current = setTimeout(() => {
      setChallenge((prev) => ({ ...prev, started: false, expired: true }));
      dialog.current.showModal(); // Show modal when timer expires
    }, target * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      {challenge.expired && (
        <ResultModal ref={dialog} target={target} result="lost" />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {target} second{target > 1 && "s"}
        </p>
        <p>
          <button onClick={challenge.started ? handleStop : handleStart}>
            {challenge.started ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={challenge.started ? "active" : undefined}>
          {challenge.started ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
