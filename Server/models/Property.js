import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  type: String,
  subCategory: String,
  location: String,
  area: Number,
  image: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // owner
}, { timestamps: true });

export default mongoose.model('Property', propertySchema);