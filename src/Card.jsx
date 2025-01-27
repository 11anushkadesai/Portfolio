import React from 'react';

const Card = ({ children }) => {
  return (
    <div className='Card-container w-200 h-auto rounded-xl justify-center   m-3 bg-white ' >
      {children}
    </div>
  );
};

export default Card;
