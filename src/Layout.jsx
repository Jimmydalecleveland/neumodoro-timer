import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './Layout.styles';

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
  const [isTimerActive, setIsTimerActive] = useState(false);

  const displayTime = () => {
    let minutes = Math.floor(time / 60).toString();
    let seconds = Math.floor(time % 60).toString();
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return `${minutes}:${seconds}`;
  };

  useInterval(
    intervalId => {
      if (time <= 0) {
        clearInterval(intervalId);
        const myNotification = new Notification('Time is up!', {
          body: 'Have a relaxing break.',
        });

        myNotification.onclick = () => {
          console.log('Notification clicked');
        };
      } else {
        setTime(time - 1);
      }
    },
    isTimerActive ? 1000 : null
  );

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <h1>Pomodoro Timer</h1>
        <Styled.Raised>
          <h4>Time Left: </h4>
          <p>{displayTime()}</p>
          <Styled.CircleButton>
            <span>›</span>
          </Styled.CircleButton>
        </Styled.Raised>
        <Styled.NavWrapper>
          <Styled.Toggle>
            <input
              type="checkbox"
              onClick={() => setIsTimerActive(!isTimerActive)}
            />
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
