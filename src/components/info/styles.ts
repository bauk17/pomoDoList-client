import styled, { keyframes } from "styled-components";

const slideFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const PomodoListInfoWrapper = styled.div`
  top: 280px;
  left: 750px;
  position: absolute;
  width: 400px;
  height: 500px;
  border-radius: 8px;
  background-color: #fff;
  z-index: 100;
  animation: ${slideFade} 0.35s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PomodolistInfoOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);

  width: 100vw;
  height: 100vh;
  z-index: 999;
`;

export const PomodoListTitle = styled.h2`
  margin-top: 20px;
  font-size: 22px;
  color: #dd6666;
`;

export const PomodoListDesc = styled.p`
  width: 300px;
  margin-top: 80px;
  font-size: 15px;
  text-align: center;
`;

export const PomodolistButtons = styled.div`
  width: 70px;
  margin-top: 280px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
`;

export const PomodoListStepsButton = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${({ active }) => (active ? "#dd6666" : "#cccccc")};
  border: 0;
  border-radius: 50%;
  cursor: pointer;
`;

export const ExitButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;

  width: 50px;
  height: 35px;

  border: 0.5px solid #dadada;
  border-radius: 4px;
  font-size: 15px;
  background-color: rgba(233, 233, 233, 0.5);

  cursor: pointer;
`;
