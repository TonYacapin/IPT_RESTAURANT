import React, { useEffect, useState } from 'react';
import { fetchMenuItems } from '../services/api';
import MenuItem from '../components/MenuItem';

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const { data } = await fetchMenuItems();
        setMenuItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching menu items', error);
      }
    };
    getMenuItems();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Menu</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map(item => (
            <div key={item._id} className="max-w-xs">
              <MenuItem item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
