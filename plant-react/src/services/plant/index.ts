import axios from 'axios';

const API_URL = 'http://localhost:3333/plants';

export const getPlants = async () => {
  const response = await axios.get(API_URL, {
    params: {
      token: import.meta.env.VITE_TREFLE_API_KEY,
      page: 1,
      // Você pode mudar ou adicionar filtros aqui depois
    }
  });

  return response.data;
};
