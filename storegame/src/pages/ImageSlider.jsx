import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true, // Agregar esta opción para centrar el slider
    centerPadding: '0px', // Espacio interno en los lados cuando está centrado
  };

  return (
    <div className=" rounded-md overflow-hidden mb-4 p-5">
      <Slider {...settings}>
        <div>
          <img
            src="https://wallpaperaccess.com/full/9048120.jpg"
            alt="Imagen 1"
            className="w-full h-[500px] object-cover rounded-md"
          />
        </div>
        <div>
          <img
            src="https://wallpaperaccess.com/full/1445584.jpg"
            alt="Imagen 2"
            className="w-full h-[500px] object-cover rounded-md"
          />
        </div>
        <div>
          <img
            src="https://wallpaperaccess.com/full/1311265.jpg"
            alt="Imagen 3"
            className="w-full h-[500px] object-cover rounded-md"
          />
        </div>
        {/* Agrega más imágenes aquí */}
      </Slider>
    </div>
  );
};

export default ImageSlider;


