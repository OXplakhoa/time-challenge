import React, { useImperativeHandle, useRef } from "react";

export default function ResultModal({ ref, target, remainTime, onReset }) {
  const userLost = remainTime <= 0;
  const formatRemain = (remainTime / 1000).toFixed(2);
  const dialogRef = useRef();
  useImperativeHandle(ref,() =>{
    return {
      open(){
        dialogRef.current.showModal();
      }
    }
  },[])
  return (
    <dialog ref={dialogRef} className="result-modal">
      {userLost && <h2>You lost</h2>}
      <p>
        The target time was <strong>{target} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formatRemain} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
