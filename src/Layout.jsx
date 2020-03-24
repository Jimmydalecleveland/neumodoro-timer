import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./Layout.styles";

import tomato from "./assets/tomato.svg";
import SVG from "react-inlinesvg";

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

  const displayTime = () => {
    let minutes = Math.floor(time / 60).toString();
    let seconds = Math.floor(time % 60).toString();
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return `${minutes}:${seconds}`;
  };

  useInterval(
    intervalId => {
      if (time <= 0) {
        clearInterval(intervalId);
        setIsTimerActive(false);
        setIsPomoActive(false);
        setTime(TWENTY_FIVE_MINUTES_IN_SECONDS);
        if (pomo === 4) setPomo(0);
        const myNotification = new Notification("Time is up!", {
          body: "Have a relaxing break."
        });

        // TODO: Make sure we need this
        myNotification.onclick = () => {
          console.log("Notification clicked");
        };
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
            <input type="checkbox" />
            <span />
          </Styled.Toggle>
        </Styled.NavWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Layout;
