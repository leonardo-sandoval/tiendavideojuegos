import React from 'react';
import ImageSlider from './ImageSlider';

const Home = () => {
  return (
    <div>
      {/* Slider */}
      <div className="mt-8">
        <ImageSlider />
      </div>
      
      {/* Contenedores de imágenes */}
      <div className="flex flex-wrap overflow-x-auto mt-8 mb-8">
        {/* Contenedor 1 */}
        <div className="w-full md:w-1/3 px-4">
          <img
            src="https://wallpaperaccess.com/full/3640742.jpg"
            alt="Imagen 1"
            className="w-full h-[300px] mb-4 md:h-[500px] object-cover rounded-md"
          />
        </div>

        {/* Contenedor 2 */}
        <div className="w-full md:w-1/3 px-4">
          <img
            src="https://wallpaperaccess.com/full/4438232.jpg"
            alt="Imagen 2"
            className="w-full h-[300px] mb-4 md:h-[500px] object-cover rounded-md"
          />
        </div>

        {/* Contenedor 3 */}
        <div className="w-full md:w-1/3 px-4">
          <img
            src="https://wallpaperaccess.com/full/4334728.jpg"
            alt="Imagen 3"
            className="w-full h-[300px] mb-4 md:h-[500px] object-cover rounded-md"
          />
        </div>
      </div>

      {/* Agrega más contenido aquí */}
    </div>
  );
};

export default Home;

