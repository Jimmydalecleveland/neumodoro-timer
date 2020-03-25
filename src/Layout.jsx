import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./Layout.styles";

import tomato from "./assets/tomato.svg";

const TWENTY_FIVE_MINUTES_IN_SECONDS = 1500;
const FIVE_MINUTES_IN_SECONDS = 300;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick(id) {
      savedCallback.current(id);
    }

    if (delay !== null) {
      let id = setInterval(() => tick(id), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Layout = () => {
  const [time, setTime] = useState(TWENTY_FIVE_MINUTES_IN_SECONDS);
  const [pomo, setPomo] = useState(0);
  const [isPomoActive, setIsPomoActive] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [areAlertsOn, setAreAlertsOn] = useState(true);

  const displayTime = () => {
    let minutes = Math.floor(time / 60).toString();
    let seconds = Math.floor(time % 60).toString();
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return `${minutes}:${seconds}`;
  };

  const sendNotification = (title, body) => {
    if (areAlertsOn) {
      new Notification(title, { body });
    }
  };

  useInterval(
    intervalId => {
      if (time <= 0) {
        if (isPomoActive) {
          if (pomo === 4) {
            sendNotification(
              "Time is up!",
              "You completed a tomato set (≧∇≦)ﾉ. Take a 25 minute break."
            );
            setTime(TWENTY_FIVE_MINUTES_IN_SECONDS);
          } else {
            sendNotification("Time is up!", "Will you take a 5?!?! (￣﹃￣)");
            setTime(FIVE_MINUTES_IN_SECONDS);
          }
          setIsBreakTime(true);
          setIsPomoActive(false);
        } else {
          if (pomo === 4) setPomo(0);
          sendNotification("Back to work! (╯▔皿▔)╯", "Ganbatte!");
          clearInterval(intervalId);
          setIsBreakTime(false);
          setTime(TWENTY_FIVE_MINUTES_IN_SECONDS);
          setIsTimerActive(false);
        }
      } else {
        setTime(time - 1);
      }
    },
    isTimerActive ? 1000 : null
  );

  const currentSeeds = () => {
    const minutes = Math.ceil(time / 60);
    return Math.ceil(minutes / 5);
  };

  const startStopTimer = () => {
    if (!isPomoActive) {
      setIsPomoActive(true);
      setPomo(pomo + 1);
    }
    setIsTimerActive(!isTimerActive);
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <h1>Neumodoro Timer</h1>

        <Styled.Tomato
          src={tomato}
          pomo={pomo}
          isPomoActive={isPomoActive}
          seeds={currentSeeds()}
        ></Styled.Tomato>

        <Styled.Raised>
          <h4>Time Left: </h4>
          <p>{displayTime()}</p>
          <Styled.CircleButton>
            <span>›</span>
          </Styled.CircleButton>
        </Styled.Raised>
        <Styled.NavWrapper>
          <Styled.Toggle>
            <input type="checkbox" onClick={startStopTimer} />
            <span />
          </Styled.Toggle>
          <Styled.Toggle>
            <input
              type="checkbox"
              onClick={() => setTime(TWENTY_FIVE_MINUTES_IN_SECONDS)}
            />
            <span></span>
          </Styled.Toggle>
          <Styled.Toggle>
            <input
              type="checkbox"
              onClick={() => setTime(FIVE_MINUTES_IN_SECONDS)}
            />
            <span />
          </Styled.Toggle>
          <Styled.Toggle>
            <input
              type="checkbox"
              onClick={() => setAreAlertsOn(!areAlertsOn)}
            />
            <span />
          </Styled.Toggle>
        </Styled.NavWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Layout;
