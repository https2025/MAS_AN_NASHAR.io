import React from 'react';

interface StaffCardProps {
  imageUrl: string;
  name: string;
  position: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ imageUrl, name, position }) => {
  return (
    <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <img
        className="mx-auto h-32 w-32 rounded-full object-cover"
        src={imageUrl}
        alt={name}
        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150'; }}
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>
      <p className="mt-1 text-primary-700">{position}</p>
    </div>
  );
};

export default StaffCard;
