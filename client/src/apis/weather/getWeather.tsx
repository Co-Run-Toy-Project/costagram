import axios from 'axios';

const getCurrWeather = async () => {
  const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
  const lat = 37.265974;
  const lon = 126.999874;

  return axios
    .get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`, {
      // baseURL: 'https://api.openweathermap.org/data/2.5',
      headers: {
        withCredentials: true,
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getCurrWeather;
