import axios from 'axios';

const getCurrWeather = async (lat: number, lon: number) => {
  const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
  // const lat = 37.265974;
  // const lon = 126.999874;


  return axios
    .get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`, {
      headers: {
        withCredentials: true,
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getCurrWeather;
