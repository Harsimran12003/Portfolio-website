const API_URL = 'http://localhost:3000/api/skills';

export const getSkills = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch skills");
  return await res.json();
};
