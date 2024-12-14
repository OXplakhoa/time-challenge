import { useRef, useState } from "react"

export default function TimerChallenge({title,target}) {
    const [started,setStarted] = useState(false);
    const [expired,setExpired] = useState(false);
    const timer = useRef();
    const handleStart = () => {
        timer.current = setTimeout(() => {
            setExpired(true);
        },target * 1000);
        setStarted(true);
    };
    const handleStop = () => {
        setStarted(false);
        setExpired(false);
        clearTimeout(timer.current)
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {expired && <p>You lost!</p>}
            <p className="challenge-time">
                {target} second{target > 1 && 's'}
            </p>
            <p>
                <button ref={timer} onClick={started ? handleStop : handleStart}>
                    {started ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={started ? 'active' : undefined}>
                {started ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}