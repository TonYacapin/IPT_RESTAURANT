import React from 'react';

const Location = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Location</h1>
      <p className="mb-4">We are located at Bayombong, Nueva Vizcaya. Visit us to experience the best dining experience!</p>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122482.03722659126!2d121.0390131!3d16.3961751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390455feea21eb9%3A0xb321e38ed5b6c3f7!2sChik%20Hen%20Jhoe%20Grill%20%26%20Restaurant!5e0!3m2!1sen!2sph!4v1715746278231!5m2!1sen!2sph" 
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Restaurant Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
