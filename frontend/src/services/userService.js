const API_URL = ' https://portfolio-website-9ool.onrender.com/api/user';

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

