import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './Layout.styles';

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
  const [time, setTime] = useState(5);
  const [isTimerActive, setIsTimerActive] = useState(false);

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
          <p>{time}</p>
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
            <input type="checkbox" />
            <span></span>
          </Styled.Toggle>
          <Styled.Toggle>
            <input type="checkbox" />
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
