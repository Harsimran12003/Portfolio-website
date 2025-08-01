const API_URL = 'http://localhost:3000/api/user';

export const getUser = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error('Failed to fetch user data');
    }
    return await res.json();
  } catch (error) {
    console.error('Error in getUser:', error);
    return null;
  }
};

