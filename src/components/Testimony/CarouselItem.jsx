import React from 'react';
import './Testimony.css';

function CarouselItem({ data }) {
  return (
    <div className='profilecontent'>
      <div className='profilephoto'>
        <img src={data.img} alt={data.name} />
      </div>
      <div className='profiletext'>
        <div className='stars'>
          <img src='/testimony/starfull.png' alt='Star' />
          <img src='/testimony/starfull.png' alt='Star' />
          <img src='/testimony/starfull.png' alt='Star' />
          <img src='/testimony/starfull.png' alt='Star' />
          <img src='/testimony/starempty.png' alt='Star' />
        </div>
        <div className='description'>
            <p>{data.description}</p>
        </div>
        <div className='name'>
          <p>- {data.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
