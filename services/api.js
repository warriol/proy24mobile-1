const API_URL = "http://192.168.1.7:8080";

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message || "Error en la conexión.");
    }
    return data;
  } catch (error) {
    throw error;
  }
};
