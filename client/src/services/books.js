import api from './api-config';

export const getAllBooks = async () => {
  const resp = await api.get('/books');
  return resp.data;
}

export const getOneBook = async (id) => {
  const resp = await api.get(`/books/${id}`);
  return resp.data;
}

export const postBook = async (bookData) => {
  const resp = await api.post('/books', { book: bookData });
  return resp.data;
}

