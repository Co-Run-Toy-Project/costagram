import { useQuery } from '@tanstack/react-query';
import getUser from '../../apis/user/getUser';

const useGetUser = () => {
  return useQuery(['get/user'], () => getUser(), {
    staleTime: 10000,
  });
};

export default useGetUser;
