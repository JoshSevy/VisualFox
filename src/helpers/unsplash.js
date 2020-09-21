import axios from 'axios';


const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: process.env.REACT_APP_API_KEY
  },
});

export const unsplashResponse = async (term) => {
  return unsplash.get("https://api.unsplash.com/search/photos", {
  params: { query: term },
  });
}