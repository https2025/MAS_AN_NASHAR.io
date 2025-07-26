
import React from 'react';

interface NewsCardProps {
  imageUrl: string;
  title: string;
  date: string;
  summary: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, title, date, summary }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{summary}</p>
        <a href="#" className="mt-4 text-primary-700 hover:text-primary-800 font-semibold text-sm self-start">
          Baca Selengkapnya &rarr;
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
