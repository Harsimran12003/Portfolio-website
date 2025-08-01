const API_URL = ' https://portfolio-website-9ool.onrender.com/api/skills';

export const getSkills = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch skills");
  return await res.json();
};
