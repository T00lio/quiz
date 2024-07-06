import { mockFetch } from "./mock-backend";

const USE_MOCK_BACKEND = import.meta.env.VITE_USE_MOCK_BACKEND === "true";

interface FetchOptions extends RequestInit {
  body?: any;
}

const apiClient = async (
  url: string,
  options: FetchOptions = {}
): Promise<any> => {
  if (USE_MOCK_BACKEND) {
    console.log("Using mock backend");
    return mockFetch(url, options.body);
  } else {
    console.log("Using real backend");
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
};

export default apiClient;
