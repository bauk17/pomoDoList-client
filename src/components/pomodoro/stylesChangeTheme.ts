import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 150px;
  z-index: 10000000000;
`;

export const CurrentColor = styled.div<{ background: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(p) => p.background};
  cursor: pointer;
  border: 2px solid white;
`;

export const Palette = styled.div`
  position: absolute;
  top: 48px;
  display: flex;
  gap: 8px;
  padding: 8px;
  background: white;
  border-radius: 8px;
`;

export const ColorOption = styled.div<{ background: string }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${(p) => p.background};
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }
`;
