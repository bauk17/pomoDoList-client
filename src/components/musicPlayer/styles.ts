import styled from "styled-components";

export const MusicPlayerWrapper = styled.div`
  width: 100vw;
  height: 150px;

  position: absolute;
  bottom: 15px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const MusicPlayerBar = styled.div`
  background-color: white;
  width: 30vw;
  height: 4px;
  border-radius: 15px;
  margin-top: 30px;
`;

export const MusicPlayerProgressBar = styled.div`
  width: 0vw;
  border-radius: 4px;
  height: 4px;
  background-color: #05458a;
  position: relative;
`;
export const MusicPlayerBarButton = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: -6px;
  right: 0;
  border-radius: 50%;
  background-color: #05458a;
`;

export const MusicPlayerControllers = styled.div`
  color: white;
  margin-top: 20px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const MusicName = styled.h2`
  color: white;
  margin-top: 15px;
`;

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  position: absolute;
  left: 180px;
  top: 0px;
`;

export const VolumeBar = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  background-color: #b1b1b1;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    background-color: #d1d5db;
  }
`;

export const VolumeProgress = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #ffffff;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const VolumeButton = styled.div`
  width: 14px;
  height: 14px;
  background-color: #22c55e;
  border-radius: 50%;
  transform: translateX(50%);
  cursor: pointer;

  opacity: 0;
  transition: opacity 0.15s ease;
`;
