import React from 'react';

const About = () => {
  return (
    <div className="text-center py-8 bg-yellow-200"> {/* Added bg-yellow-200 for a light yellow background */}
      <h1 className="text-3xl font-bold mb-4 text-primary-red">About Us</h1>
      <p className="text-lg mb-4">Welcome to our restaurant! We are located in Nueva Vizcaya and pride ourselves on serving delicious food made from the freshest ingredients. Our history dates back to [Year] when [Founder] started this restaurant with a vision to create a cozy place for families and friends to enjoy great meals together.</p>
    </div>
  );
};

export default About;
