const MenuItem = require('../models/MenuItem');

exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createMenuItem = async (req, res) => {
  const { name, description, price, image } = req.body;

  const newItem = new MenuItem({ name, description, price, image });
  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.updateMenuItem = async (req, res) => {
  const { name, description, price, image } = req.body;

  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, { name, description, price, image }, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
