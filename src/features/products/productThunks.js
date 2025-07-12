import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:5000/products';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await axios.get(API);
  return res.data;
});

export const addProduct = createAsyncThunk('products/add', async (product) => {
  const res = await axios.post(API, product);
  return res.data;
});

export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

export const updateProduct = createAsyncThunk('products/update', async (product) => {
  const res = await axios.put(`${API}/${product.id}`, product);
  return res.data;
});
