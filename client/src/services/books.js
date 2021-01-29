import api from './api-config';

export const getAllBooks = async () => {
  const resp = await api.get('/books');
  return resp.data;
}

export const postBook = async (foodData) => {
  const resp = await api.post('/foods', { food: foodData });
  return resp.data;
}