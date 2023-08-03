import React from 'react';
import Newer from '../componets/Newe'; 

const News = () => {
  return (
    <div className=" min-h-screen p-8">
      <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-4">
        <Newer
          img="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
          title="Marvel's Spider-Man"
          category="PS5"
          price="51"
        />
        <Newer
          img="https://m.media-amazon.com/images/I/91OWgMrKsQL.jpg"
          title="Little Nightmares II"
          category="PS4"
          price="40"
        />
        <Newer
          img="https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDfb8QFD.png"
          title="Ghost of Tsushima"
          category="PS4"
          price="48"
        />
        <Newer
          img="https://media.vandal.net/m/82925/call-of-duty-warzone-20203102215835_1.jpg"
          title="Call of Duty: Warzone"
          category="PC"
          price="60"
        />
        <Newer
          img="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
          title="Fifa 22"
          category="Xbox Series X"
          price="120"
        />
        <Newer
          img="https://wallpaperaccess.com/full/2096239.jpg"
          title="Metroido"
          category="Xbox Series X"
          price="90"
        />
        <Newer
          img="https://wallpaperaccess.com/full/2086816.jpg"
          title="five fire"
          category="Xbox Series X"
          price="120"
        />
        <Newer
          img="https://wallpaperaccess.com/full/459229.jpg"
          title="Assasins creed"
          category="Xbox Series X"
          price="20"
        />
        <Newer
          img="https://wallpaperaccess.com/full/2126384.jpg"
          title="Hollow 3"
          category="Xbox Series X"
          price="120"
        />
        <Newer
          img="https://wallpaperaccess.com/full/2126362.jpg"
          title="Deadpool"
          category="Xbox Series X"
          price="180"
        />
      </div>
    </div>
  );
};

export default News;

