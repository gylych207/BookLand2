import api from './api-config';

export const getAllCategories = async () => {
  const resp = await api.get('/allCategories');
  return resp.data;
}

export const getOneCategory = async (id) => {
  const resp = await api.get(`/books/${id}/categories`);
  return resp.data;
}