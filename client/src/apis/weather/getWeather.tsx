import axios from 'axios';

const getCurrWeather = async (lat: number, lon: number) => {
  const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

  return axios
    .get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`, {
      headers: {
        withCredentials: true,
        'Content-Type': `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getCurrWeather;
