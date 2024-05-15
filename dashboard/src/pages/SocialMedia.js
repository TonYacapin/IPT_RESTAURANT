import React from 'react';

const SocialMedia = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Follow Us on Social Media</h1>
      <ul className="list-disc pl-6">
        <li><a href="https://www.facebook.com/yourrestaurant" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Facebook</a></li>
        <li><a href="https://www.instagram.com/yourrestaurant" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">Instagram</a></li>
        <li><a href="https://twitter.com/yourrestaurant" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a></li>
      </ul>
    </div>
  );
};

export default SocialMedia;
