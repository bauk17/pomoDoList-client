import { useState } from "react";
import * as styled from "./styles";
import { onboardingSteps } from "../../data/onboardingModal";

type Props = {
  onClose: () => void;
};

export function FirstPomoDoList({ onClose }: Props) {
  function closeOnTutorial() {
    localStorage.setItem("hasSeenTutorial", "true");
  }
  const [index, setIndex] = useState(0);
  return (
    <>
      <styled.PomodolistInfoOverlay
        onClick={() => {
          onClose(), closeOnTutorial();
        }}
      >
        <styled.PomodoListInfoWrapper
          onClick={(e) => e.stopPropagation()}
          key={index}
        >
          <styled.PomodoListTitle>
            {onboardingSteps[index].title}
          </styled.PomodoListTitle>
          <styled.PomodoListDesc style={{ whiteSpace: "pre-line" }}>
            {onboardingSteps[index].description}
          </styled.PomodoListDesc>
          <styled.PomodoListImg>
            <img
              src={onboardingSteps[index].img}
              alt=""
              style={{ borderRadius: 4 }}
              width={onboardingSteps[index].imgWidth}
              height={onboardingSteps[index].imgHeight}
            />
          </styled.PomodoListImg>
          <styled.PomodolistButtons>
            {onboardingSteps.map((_, i) => (
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
