// hooks/useTodoModals.ts
import { useEffect, useState } from "react";

export function useTodoModals() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);

  useEffect(() => {
    const hasSeenInfo = localStorage.getItem("hasSeenInfo");
    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");

    if (!hasSeenInfo) {
      setInfoOpen(true);
      return;
    }

    if (hasSeenInfo && !hasSeenTutorial) {
      setOnboardingOpen(true);
    }
  }, [infoOpen]);

  function closeInfo() {
    localStorage.setItem("hasSeenInfo", "true");
    setInfoOpen(false);
  }

  function closeOnboarding() {
    localStorage.setItem("hasSeenTutorial", "true");
    setOnboardingOpen(false);
  }

  return {
    infoOpen,
    onboardingOpen,
    openInfo: () => setInfoOpen(true),
    openOnboarding: () => setOnboardingOpen(true),
    closeInfo,
    closeOnboarding,
  };
}
