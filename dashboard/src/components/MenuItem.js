import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
  if (!item) return null; // Gracefully handle null or undefined item

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
        style={{ width: '100%', height: '200px' }} // Adjust width and height as needed
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
        <p className="text-gray-700">{item.description}</p>
        <p className="text-gray-900 font-bold mt-2">₱{item.price}</p>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default MenuItem;
