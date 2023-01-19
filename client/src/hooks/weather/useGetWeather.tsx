import { useQuery } from '@tanstack/react-query';
import getCurrWeather from '../../apis/weather/getWeather';

const useGetWeather = (lat: number, lon: number) => {
  return useQuery(['get/weather'], () => getCurrWeather(lat, lon), {
    enabled: false,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetWeather;
