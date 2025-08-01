
const API_URL = " https://portfolio-website-9ool.onrender.com/api/education";

export const getEducation = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching education data:", error);
    throw error;
  }
};
