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

const PastCards = () => {
  const cards = [
       {
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/9f083a14-30ab-45fc-a002-54e21e6873d3.jpeg?im_w=1440&im_q=highq',
        title: 'Make core memories with Inside Out 2',
        host: 'Joy',
        status: 'Sold out',
        imageUrl: 'https://example.com/doja-cat',
        shareUrl: 'https://example.com/share/doja-cat',
      },
      {
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/c92634d0-4964-439a-905d-b9129af14d34.jpeg?im_w=1440&im_q=highq',
        title: 'Design your Incredibles Supersuit',
        host: 'Edna Mode',
        status: 'Sold out',
        imageUrl: 'https://example.com/prince',
        shareUrl: 'https://example.com/share/prince',
      },
      {
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/99417998-fa44-4c75-ae77-287c1468977b.jpeg?im_w=1440&im_q=highq',
        title: 'Go on tour with feid',
        host: 'Feid',
        status: 'Sold out',
        imageUrl: 'https://example.com/x-mansion',
        shareUrl: 'https://example.com/share/x-mansion',
      },
      {
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/872f434b-9348-4ff1-8c6f-754fdbab4010.jpeg?im_w=1440&im_q=highq',
        title: 'Game with khaby Lame',
        host: 'Khaby Lame',
        status: 'Sold out',
        imageUrl: 'https://example.com/olympic-games',
        shareUrl: 'https://example.com/share/olympic-games',
      },
      {
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/b676fc8d-8250-4df0-a7cb-728b0486e371.jpeg?im_w=1440&im_q=highq',
        title: 'Crash at the X-Mansion',
        host: 'Jubliee',
        status: 'Sold out',
        imageUrl: 'https://example.com/musee-dorsay',
        shareUrl: 'https://example.com/share/musee-dorsay',
      },
      {
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyMzIwMTE1Njc3Njg0MTIzOQ%3D%3D/original/fb9dcb8d-7fa5-402f-91ae-fa2a26e9f097.png?im_w=1440&im_q=highq',
        title: 'Spend the night in the Ferrari Museum',
        host: 'Marc Gené',
        status: 'Sold out',
        imageUrl: 'https://example.com/janhvi-kapoor',
        shareUrl: 'https://example.com/share/janhvi-kapoor',
      },
      
      
      {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/e6b26733-2c15-47d9-b097-6968b39bb697.jpeg?im_w=1440&im_q=highq',
      title: 'Drift off in Up house',
      host: 'Fredricksen',
      status: 'Sold out',
      imageUrl: 'https://example.com/kevin-hart',
      shareUrl: 'https://example.com/share/kevin-hart',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/b16970cf-1d55-4edd-bb1f-e1735d0a228e.jpeg?im_w=1440&im_q=highq',
      title: 'Shrek’s Swamp',
      host: 'Donkey',
      status: 'Sold out',
      imageUrl: 'https://example.com/doja-cat',
      shareUrl: 'https://example.com/share/doja-cat',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-857387972692815761/original/16a723d0-513e-4aa4-9484-a388f1d08a30.jpeg?im_w=1440&im_q=highq',
      title: 'Barbie’s Malibu DreamHouse, Ken’s Way',
      host: 'Ken',
      status: 'Sold out',
      imageUrl: 'https://example.com/prince',
      shareUrl: 'https://example.com/share/prince',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/1b848add-640d-49a9-a3d5-96c19b6ff743.jpeg?im_w=1440&im_q=highq',
      title: 'Ted Lasso’s Favorite Pub',
      host: 'Mae',
      status: 'Sold out',
      imageUrl: 'https://example.com/x-mansion',
      shareUrl: 'https://example.com/share/x-mansion',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-782615921189136934/original/c67f78f1-5807-449a-9a88-753b7fa62d6a.jpeg?im_w=1440&im_q=highq',
      title: 'Houseplant Retreat',
      host: 'Seth Rogan',
      status: 'Sold out',
      imageUrl: 'https://example.com/olympic-games',
      shareUrl: 'https://example.com/share/olympic-games',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/365299e3-f926-47ee-bcbf-606d6a0370b9.jpeg?im_w=1440&im_q=highq',
      title: 'Home Alone Holiday',
      host: 'Buzz',
      status: 'Sold out',
      imageUrl: 'https://example.com/musee-dorsay',
      shareUrl: 'https://example.com/share/musee-dorsay',
    },
    {
      image: 'https://a0.muscache.com/im/pictures/be0957a9-da56-47d6-89ca-223b6e75321a.jpg?im_w=1440&im_q=highq',
      title: 'The Last Blockbuster',
      host: 'Sandi',
      status: 'Sold out',
      imageUrl: 'https://example.com/janhvi-kapoor',
      shareUrl: 'https://example.com/share/janhvi-kapoor',
    },

    
  ];


  return (
    <div>
        <h2 className="mt-10 ml-8 text-3xl font-bold">Past experiences</h2>
        <div className="ml-7 mr-6  mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {cards.map((card, index) => (
            <Card key={index} {...card} />
            ))}
        </div>
    </div>
  )
}

export default PastCards