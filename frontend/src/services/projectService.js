const API_URL = "http://localhost:3000/api/projects";

export const getProjects = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch projects");
    return await res.json();
  } catch (err) {
    console.error("Error fetching projects:", err);
    throw err;
  }
};
