import React, { useEffect, useRef, useState } from 'react';
import styles from './StopWatch.module.css';

export default function StopWatch() {
  const [time, setTime] = useState(650);

  const interval = useRef(null);

  useEffect(() => {
    startClick();
  }, []);

  function changeSecondstoTime(sec) {
    let result = '00:00';
    let minute = 0;

    while (sec >= 60 && minute < 60) {
      sec -= 60;
      minute++;
    }
    if (minute === 60) {
      return result;
    }

    let secResult = sec < 10 ? `0${sec}` : sec;
    let minuteResult = minute < 10 ? `0${minute}` : minute;

    result = `${minuteResult}:${secResult}`;
    return result;
  }

  function startClick() {
    if (interval.current) return;
    interval.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function stopClick() {
    clearInterval(interval.current);
    interval.current = null;
  }

  function resetClick() {
    stopClick();
    setTime(0);
  }
  return (
    <>
      <div className={styles.timerShowContainer}>
        <span className={styles.timerShow}>{changeSecondstoTime(time)}</span>
      </div>
      <button onClick={startClick}>start</button>
      <button onClick={stopClick}>stop</button>
      <button onClick={resetClick}>reset</button>
    </>
  );
}
