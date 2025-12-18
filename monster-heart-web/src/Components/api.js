const API_URL = "http://localhost:8080/api";

export const getGreeting = async () => {
  const response = await fetch(`${API_URL}/greeting`);
  return response.json();
};