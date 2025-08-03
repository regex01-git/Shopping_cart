import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample({ images }) {
  return (
    <Carousel variant='dark' data-bs-theme="dark">
      {images?.map((src, idx) => (
        <Carousel.Item key={idx}>
          <img loading="lazy" className="d-block w-100" src={src} alt={`Slide ${idx + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
