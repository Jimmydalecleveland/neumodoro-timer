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

  useInterval(intervalId => {
    if (time <= 0) {
      clearInterval(intervalId);
      const myNotification = new Notification('Time is up!', {
        body:
          'Have a relaxing break, and try not to think about what you have been working on.',
      });

      myNotification.onclick = () => {
        console.log('Notification clicked');
      };
    } else {
      setTime(time - 1);
    }
  }, 1000);

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
            <input type="checkbox" checked />
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
