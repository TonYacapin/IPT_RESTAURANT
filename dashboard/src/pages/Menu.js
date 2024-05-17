import React, { useState, useEffect } from 'react';
import { fetchMenuItems } from '../services/api';
import MenuItem from '../components/MenuItem';
import { Modal } from '@mui/material'; // Import Modal component from MUI

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal open/close

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
      {/* Modal component for detailed menu item view */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Content of the modal goes here */}
        <div>Modal Content</div>
      </Modal>
    </div>
  );
};

export default Menu;
