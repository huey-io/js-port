import React, { useEffect, useState } from 'react';

const ToolScript = ({ words, typingSpeed, deletionDelay }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentIndex];
      const currentChar = currentWord.charAt(displayText.length);

      if (isDeleting) {
        setDisplayText((prevText) => prevText.slice(0, -1));
      } else {
        setDisplayText((prevText) => prevText + currentChar);
      }

      let typeSpeed = typingSpeed;

      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!isDeleting && currentIndex === words.length - 1 && displayText === currentWord) {
        setTimeout(() => {
          setIsDeleting(true);
        }, deletionDelay);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
      }
    };

    const timer = setTimeout(type, typingSpeed);

    return () => {
      clearTimeout(timer);
    };
  }, [displayText, isDeleting, currentIndex, words, typingSpeed, deletionDelay]);

  return (
    <div className="tool-script-container">
      <span className="txt">{displayText}</span>
    </div>
  );
};

export default ToolScript;
