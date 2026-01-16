import { useState } from "react";
import * as styled from "./styles";
import { steps } from "../../data/pomoDoListInfoSteps";

type Props = {
  onClose: () => void;
};

export function PomodoListInfo({ onClose }: Props) {
  function closeOnInfo() {
    localStorage.setItem("hasSeenInfo", "true");
  }
  const [index, setIndex] = useState(0);
  return (
    <>
      <styled.PomodolistInfoOverlay
        onClick={() => {
          onClose(), closeOnInfo();
        }}
      >
        <styled.PomodoListInfoWrapper
          onClick={(e) => e.stopPropagation()}
          key={index}
        >
          <styled.PomodoListTitle>{steps[index].title}</styled.PomodoListTitle>
          <styled.PomodoListDesc style={{ whiteSpace: "pre-line" }}>
            {steps[index].description}
          </styled.PomodoListDesc>
          <styled.PomodolistButtons>
            {steps.map((_, i) => (
              <styled.PomodoListStepsButton
                key={i}
                onClick={() => setIndex(i)}
                active={index === i}
              />
            ))}
          </styled.PomodolistButtons>
          <styled.ExitButton onClick={onClose}>Got it!</styled.ExitButton>
        </styled.PomodoListInfoWrapper>
      </styled.PomodolistInfoOverlay>
    </>
  );
}
