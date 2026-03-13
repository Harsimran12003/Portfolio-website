const API_URL = 'https://portfolio-website-backend-ashy.vercel.app/api/user';

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

