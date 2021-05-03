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

export const deleteBook = async (id) => {
  const resp = await api.delete(`/books/${id}`);
  return resp;
}

export const putBook = async (id, bookData) => {
  const resp = await api.put(`/books/${id}`, { book: bookData });
  return resp.data;
}
export const filterBook = async (bookData) => {
  const resp = await api.post('/books/filters', { book: bookData });
  return resp.data;
}
export const rentCreate = async (id, rentData) => {
  const resp = await api.post(`/books/${id}/rents`, { rent: rentData });
  return resp.data;
}

export const getRentedBooks = async (id) => {
  const resp = await api.get(`/books/${id}/rents`);
  return resp.data;
}

export const rentBookDelete = async (id) => {
  const resp = await api.delete(`/books/1/rents/${id}`);
  return resp.data;
}

export const updateRating = async (id, rating) => {
  const resp = await api.put(`/books/1/rents/${id}`, { rent: rating });
  return resp.data;
}