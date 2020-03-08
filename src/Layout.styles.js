import styled from 'styled-components';
import 'typeface-poppins';

export const Wrapper = styled.div`
  height: 100vh;
  padding: 30px;
  font-family: 'Poppins', sans-serif;
  background: #d4dfee;
  color: #31456a;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1em;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
  }

  h1 {
    text-align: center;
  }

  h4,
  h5 {
    color: #7888a3;
    font-weight: 400;
  }

  h4 {
    font-size: 20px;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px;
  background: #eaf2f9;
  width: 480px;
  box-shadow: 5px 5px 30px #c1c9d2;
  border-radius: 20px;
`;

export const Raised = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
  background: #e6eef7;
  box-shadow: 5px 5px 10px #c1c9d2, -5px -5px 10px #ffffff;
  border-radius: 20px;

  h4 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Toggle = styled.label`
  input[type='checkbox'] {
    display: none;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e6eef7;
    box-shadow: 5px 5px 10px #c1c9d2, -5px -5px 10px #ffffff;
    border-radius: 20px;

    height: 70px;
    width: 70px;
  }

  input:checked ~ span {
    border: solid 3px #fcfeff;
    filter: blur(1px);
    box-shadow: 1px 1px 2px #c1c9d2, inset 5px 5px 10px #c1c9d2,
      inset -5px -5px 10px #ffffff;
  }
`;

export const CircleButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  background: #e6eef7;
  box-shadow: 5px 5px 10px #d1d7de, -5px -5px 10px #ffffff;
  border-radius: 50%;
  font-size: 36px;
  font-weight: 300;

  span {
    position: absolute;
  }
`;
