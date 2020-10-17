import { Schema, model } from 'mongoose';

export const ProductSchema = new Schema({
  name: String,
  age: Number,
  breed: String,
});

export const ProductModel = model('Product', ProductSchema);