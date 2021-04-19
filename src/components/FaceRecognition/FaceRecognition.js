import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxList }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
        {boxList.map(({ topRow, rightCol, bottomRow, leftCol, id }) => (
          <div className='bounding-box' style={{ top: topRow, right: rightCol, bottom: bottomRow, left: leftCol }} key={id}></div>
        ))}
      </div>
    </div>
  );
}

export default FaceRecognition;