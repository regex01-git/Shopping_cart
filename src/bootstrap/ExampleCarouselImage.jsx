
import React from 'react';
import { Placeholder } from 'react-bootstrap';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div style={{ 
      height: '400px',
      background: '#e9ecef',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#495057',
      fontSize: '1.5rem'
    }}>
      {text} (Image Placeholder)
    </div>
  );
};

export default ExampleCarouselImage;

