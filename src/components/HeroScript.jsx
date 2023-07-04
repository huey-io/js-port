import React, { useEffect, useState } from 'react';

const HeroScript = ({ words, typingSpeed, deletionDelay }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentIndex];
      const currentChar = currentWord.charAt(displayText.length);

      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText((prevText) => prevText.slice(0, -1));
        } else {
          setIsDeleting(false);
        }
      } else {
        if (displayText !== currentWord) {
          setDisplayText((prevText) => prevText + currentChar);
        } else {
          setIsDeleting(true);
        }
      }

      let typeSpeed = typingSpeed;

      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(type, typingSpeed);

    return () => {
      clearTimeout(timer);
    };
  }, [displayText, isDeleting, currentIndex, words, typingSpeed, deletionDelay]);

  return (
    <div className="hero-script-container">
      <p className="max-w-xl font-light text-cyan-500">{displayText}</p>
    </div>
  );
};

export default HeroScript;
