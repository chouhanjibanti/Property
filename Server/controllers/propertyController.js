import Property from '../models/Property.js';
import cloudinary from '../config/cloudinary.js';

// Create a new property
export const createProperty = async (req, res) => {
  try {
    const property = new Property({
      ...req.body,
      user: req.user._id, // Attach user
    });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all properties
export const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find().populate('user', 'username email');
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get properties for the logged-in user
export const getMyProperties = async (req, res) => {
  try {
    const properties = await Property.find({ user: req.user._id });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single property by ID
export const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).json({ message: 'Property not found' });
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a property
export const updateProperty = async (req, res) => {
  try {
    console.log('Update request for ID:', req.params.id);
    const updatedProperty = await Property.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!updatedProperty) return res.status(404).json({ message: 'Property not found' });
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a property
export const deleteProperty = async (req, res) => {
    try {
        console.log('Delete request for ID:', req.params.id);
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) return res.status(404).json({ message: 'Not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};