import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, target }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemain,setTimeRemain] = useState(target * 1000);
  const timerActive =  timeRemain > 0 && timeRemain < target * 1000;
  if(timeRemain <= 0){
    clearInterval(timer.current);
    setTimeRemain(target * 1000);
    dialog.current.showModal();
  }
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemain(prev => prev - 10);
    }, 10);
  }
  const handleStop = () => {
    dialog.current.showModal();
    clearInterval(timer.current);

  };

  return (
    <>
        <ResultModal ref={dialog} target={target} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {target} second{target > 1 && "s"}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerActive? "active" : undefined}>
          {timerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
