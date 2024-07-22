import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

const Card = ({ image, title, host, status, imageUrl, shareUrl }) => {
  return (
    <div className="max-w-md rounded overflow-hidden m-2 flex flex-col relative">
      <div className="relative">
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <img className="w-full object-cover h-80  rounded-2xl" src={image} alt={title} />
        </a>
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
        >
          <FaShareAlt className="text-gray-700" />
        </a>
      </div>
      <div className="px-6 py-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="text-gray-1000 text-14 truncate -ml-6">{title}</div>
          <p className="text-gray-500 text-base  -ml-6">Hosted by {host}</p>
        </div>
        <p className="text-gray-1000 text-8 font-medium -ml-6">{status}</p>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/cda19e4c-ae11-47b1-831b-a29f94ab76dc.png?im_w=1440&im_q=highq',
      title: 'Go VIP with Kevin Hart',
      host: 'Kevin Hart',
      status: 'Coming July',
      imageUrl: 'https://example.com/kevin-hart',
      shareUrl: 'https://example.com/share/kevin-hart',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/01819c16-43a1-4aee-9957-9edce6eb8e16.png?im_w=1440&im_q=highq',
      title: 'Join a living room session with Doja',
      host: 'Doja Cat',
      status: 'Coming October',
      imageUrl: 'https://example.com/doja-cat',
      shareUrl: 'https://example.com/share/doja-cat',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=1440&im_q=highq',
      title: 'Stay in Prince\'s Purple Rain house',
      host: 'Wendy and Lisa',
      status: 'Coming October',
      imageUrl: 'https://example.com/prince',
      shareUrl: 'https://example.com/share/prince',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=1440&im_q=highq',
      title: 'Train at the X-Mansion',
      host: 'Jubilee',
      status: 'Booking closed',
      imageUrl: 'https://example.com/x-mansion',
      shareUrl: 'https://example.com/share/x-mansion',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MjI1MjI0NDQ0MzYzMjM4Mg%3D%3D/original/ae3426d1-fba4-44d4-bed2-690426f25f7a.jpeg?im_w=1440&im_q=highq',
      title: 'Open the Olympic Games at Musée d’Orsay',
      host: 'Mathieu Lehanneur',
      status: 'Sold out',
      imageUrl: 'https://example.com/olympic-games',
      shareUrl: 'https://example.com/share/olympic-games',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png?im_w=1440&im_q=highq',
      title: 'Wake up in the Musée d’Orsay',
      host: 'Mathieu Lehanneur',
      status: 'Sold out',
      imageUrl: 'https://example.com/musee-dorsay',
      shareUrl: 'https://example.com/share/musee-dorsay',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/bc989f2d-eca8-4bcf-a9b0-b70b8e685a64.jpeg?im_w=1440&im_q=highq',
      title: 'Live like Bollywood star Janhvi Kapoor',
      host: 'Janhvi Kapoor',
      status: 'Sold out',
      imageUrl: 'https://example.com/janhvi-kapoor',
      shareUrl: 'https://example.com/share/janhvi-kapoor',
    },
  ];

  return (
    <div className="ml-7 mr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
