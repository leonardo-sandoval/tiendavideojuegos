import React from 'react';

const streamData = [
  {
    link: "https://example.com/link1",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 1",
  },
  {
    link: "https://example.com/link2",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 2",
  },
  {
    link: "https://example.com/link3",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 3",
  },
  {
    link: "https://example.com/link3",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 3",
  },
  {
    link: "https://example.com/link3",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 3",
  },
  {
    link: "https://example.com/link3",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 3",
  },
  {
    link: "https://example.com/link3",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 3",
  },
  {
    link: "https://example.com/link3",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 3",
  },
  {
    link: "https://example.com/link3",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 3",
  },
  {
    link: "https://example.com/link3",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 3",
  },
  {
    link: "https://example.com/link3",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 3",
  },
  {
    link: "https://example.com/link3",
    image: "https://wallpaperaccess.com/full/917692.jpg",
    description: "Descripción del Stream 3",
  },
  // Agrega más datos de streams aquí
];

const Stream = () => {
  return (
    <div className=" min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {streamData.map((stream, index) => (
          <div key={index} className="w-full">
            <a href={stream.link} target="_blank" rel="noopener noreferrer">
              <img
                src={stream.image}
                alt={`Imagen ${index + 1}`}
                className="w-full h-auto object-cover rounded-md"
              />
              <p className="text-white mt-2">{stream.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Stream;
