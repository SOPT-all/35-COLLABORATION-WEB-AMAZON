export const fetchFilters = async () => {
    try {
      const response = await fetch('https://www.amazon.r-e.kr/api/v1/products/filters', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch filters:', error);
      throw error;
    }
  };
  