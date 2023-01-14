import SyncLoader from 'react-spinners/SyncLoader';
import { useEffect } from 'react';
const OauthRedirectHandler = () => {
  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get('code');

    window.location.href = '/';
  }, []);
  return (
    <>
      <div className="w-screen h-screen flex flex-row justify-center items-center">
        <SyncLoader color="#36d7b7" />
      </div>
    </>
  );
};

export default OauthRedirectHandler;
