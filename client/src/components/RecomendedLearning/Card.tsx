import React from "react";

interface CardProps {
  image: string;
  name: string;
  description: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ image, name, description, url }) => {
  return (
    <div className="flex flex-col rounded-2xl w-full bg-white shadow-xl border m-2">
      <figure className="w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-48 rounded-2xl object-cover  border-gray-200"
        />
      </figure>
      <div className="flex flex-col p-4">
        <div className="font-bold text-lg mb-2">
          <a
            href={url}
            className="text-gray-900 hover:text-blue-500 bolder s-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
