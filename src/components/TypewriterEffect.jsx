import React, { useEffect, useState } from 'react';

const TypewriterEffect = ({ words, wait }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentIndex = wordIndex % words.length;
      const fullTxt = words[currentIndex];

      if (isDeleting) {
        setText((prevText) => prevText.slice(0, -1));
      } else {
        setText((prevText) => fullTxt.slice(0, prevText.length + 1));
      }

      let typeSpeed = 500/2 / fullTxt.length; // Set a slower typing speed

      if (isDeleting) {
        typeSpeed *= 1; // Set a slower deleting speed
      }

      if (!isDeleting && text === fullTxt) {
        typeSpeed = wait;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prevIndex) => prevIndex + 1);
        typeSpeed = 300; // Set a slower delay before moving to the next word
      }

      setTimeout(type, typeSpeed);
    };

    const timer = setTimeout(type, 0);

    return () => {
      clearTimeout(timer);
    };
  }, [isDeleting, text, wordIndex, words, wait]);

  return <span className="txt">{text}</span>;
};

export default TypewriterEffect;
