import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Update with your backend URL

const api = {
  // Bike related APIs
  getAllBikes: () => axios.get(`${BASE_URL}/bike/all`),
  addBike: (bikeData) => axios.post(`${BASE_URL}/bike`, bikeData),
  getByRegister: (registrationNumber) => axios.get(`${BASE_URL}/bike/register/${registrationNumber}`),

  // Add more API endpoints as needed
};

export default api;