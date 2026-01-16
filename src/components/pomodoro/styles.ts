import styled, { keyframes } from "styled-components";

/* background collors for PomodoroWrapper: #2AA0F5 | #eb666a | #94BBFA | #3082C1 (main) */

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

export const PomodoroWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  border-radius: 4px;
`;

export const PomodoroContainer = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 700px;
  text-align: center;
`;

export const PomodoroTitle = styled.h1`
  color: white;
  font-family: sans-serif;
  font-size: 80px;
`;

export const PomodoroTimer = styled.h1`
  color: white;
  margin-top: 70px;
  font-size: 85px;
`;

export const PomodoroButton = styled.button`
  font-size: 28px;
  margin-top: 60px;
  border: 0;
  width: 240px;
  height: 80px;
  border-radius: 8px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  opacity: 0.85;

  transition: 0.8s all ease;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const PomodoroTask = styled.p`
  margin-top: 70px;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
`;

export const PomodoroCloseButton = styled.button`
  font-weight: 500;
  position: absolute;
  right: 400px;
  border: 0;
  background-color: transparent;
  color: white;
  font-size: 25px;
  top: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;

  animation: ${pulse} 4s ease-in-out infinite;
`;
