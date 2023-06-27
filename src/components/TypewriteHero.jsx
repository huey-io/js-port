import React, { useEffect, useState } from 'react';

const TypewriteHero = ({ words, typingSpeed, deletionDelay }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentIndex];

      if (isDeleting) {
        setDisplayText((prevText) => prevText.slice(0, -1));
      } else {
        setDisplayText((prevText) => prevText + currentWord);
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
        setCurrentIndex(0);
        setDisplayText('');
      } else if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);

    return () => {
      clearTimeout(timer);
    };
  }, [displayText, isDeleting, currentIndex, words, typingSpeed, deletionDelay]);

  return <p className='max-w-xl font-light text-gray-500'>{displayText}</p>;
};

export default TypewriteHero;
