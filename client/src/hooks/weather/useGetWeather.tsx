import { useQuery } from '@tanstack/react-query';
import getCurrWeather from '../../apis/weather/getWeather';

const useGetWeather = () => {
  return useQuery(['get/weather'], () => getCurrWeather(), {
    enabled: false,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetWeather;
