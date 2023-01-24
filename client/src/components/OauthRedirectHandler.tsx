import SyncLoader from 'react-spinners/SyncLoader';
import { useEffect } from 'react';
import useGetOauth from '../hooks/get/useGetOauth';

const OauthRedirectHandler = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const { refetch } = useGetOauth(code);
  useEffect(() => {
    if (code) {
      refetch();
    }
  }, []);
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center">
      <SyncLoader color="#36d7b7" />
    </div>
  );
};

export default OauthRedirectHandler;
