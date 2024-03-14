import React, { useState, useEffect } from 'react';
import './ValuePreposition.css'; 

const ValuePreposition = () => {
  const images = [
    '/images/img (1).png',
    '/images/img (2).png',
    '/images/img (3).png',
    '/images/img (4).png',
    
  ];

  const cards = [
    { name: 'community of', number: "800+", developers: "developers" },
    { name: 'community of', number: "2,000+", developers: "Students influenced" },
    { name: 'community of', number: "1,250+", developers: "chapters across world" },
    { name: 'community of', number: "140", developers: "countries " },
    
  ];

  const colors = ['#EA4235', '#4286F5', '#109D58', '#FABD03'];
  const display=['flex','none','none','none']

  const [currentImage, setCurrentImage] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
      setCurrentCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, cards.length, currentImage, currentCard]);

  return (
    <div className="slider">
      <img src={images[currentImage]} alt="" className="fade-in" />
      <div className="card fade-in">
        <span className='developers' style={{display:display[currentCard]}}>{cards[currentCard].name}</span>
        <span className='Number' style={{ color: colors[currentCard] }}> {cards[currentCard].number}</span>
        <span className='developers'>{cards[currentCard].developers}</span>
      </div>
    </div>
  );
};


export default ValuePreposition;
