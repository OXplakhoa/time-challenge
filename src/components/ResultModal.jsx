import React from "react";

export default function ResultModal ({ref,result,target}){
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>The target time was <strong>{target} seconds</strong></p>
      <p>You stopped the timer with <strong>X seconds left</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};