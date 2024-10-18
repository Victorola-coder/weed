import React, { useEffect, useState } from "react";
import HeaderText from "../texts/HeaderText";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
  delay = 1000,
}) => {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let currentIndex = 0;
    let intervalId: NodeJS.Timeout; // Fix typing for timeout ID

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        currentIndex++;

        if (currentIndex >= text.length) {
          clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return (
    <HeaderText className="text-weed-primary-100 text-5xl font-italianno text-center">
      {displayText}
    </HeaderText>
  );
};

export default TypingAnimation;
