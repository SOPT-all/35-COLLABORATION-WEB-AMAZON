import axios from 'axios';

export const fetchFilters = async () => {
  try {
    const response = await axios.get('https://www.amazon.r-e.kr/api/v1/products/filters', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Failed to fetch filters:', error);
    throw error; 
  }
};
