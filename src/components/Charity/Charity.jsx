import React, { useState, useEffect } from 'react';
import './Charty.css';

function Charity() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: 'Women Empowerment',
      number: '1 Million+',
      imgSrc: '/charity/women.png'
    },
    {
      title: 'Education',
      number: '2 Million+',
      imgSrc: '/charity/women.png'
    },
    {
      title: 'Healthcare',
      number: '3 Million+',
      imgSrc: '/charity/women.png'
    },
    {
        title: 'Women Empowerment',
        number: '4 Million+',
        imgSrc: '/charity/women.png'
      },
      {
        title: 'Education',
        number: '5 Million+',
        imgSrc: '/charity/women.png'
      },
      {
        title: 'Healthcare',
        number: '6 Million+',
        imgSrc: '/charity/women.png'
      },
    // Add more items as needed
  ];

  

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 6000); // Adjust autoplay interval as needed

    return () => clearInterval(interval);
  }, [items.length]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };


  const visibleItems = [];
    for (let i = 0; i < 3; i++) {
  visibleItems.push(items[(currentIndex + i) % items.length]);
}

  return (
    <div className='charity'>
      <div className='charityBox'>
        <div className='charityTitle'>Charity raised so far..</div>
        <div className='charityContent'>
          <div className='carousel-inner'>
            {visibleItems.map((item, index) => (
              <div className='card' key={index}>
                <div className='cardinfo'>
                  <p className='cardtitle'>{item.title}</p>
                  <p className='cardnumber'>{item.number}</p>
                </div>
                <div className='cardphoto'>
                  <img src={item.imgSrc} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
          <div className='charitybutton'>
            <button className='left' onClick={goToPrevSlide}>
              <img src='/charity/leftarrow.png' alt='Left Arrow' />
            </button>
            <button className='right' onClick={goToNextSlide}>
              <img src='/charity/rightarrow.png' alt='Right Arrow' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charity;
