import React from 'react';
import { RecoilRoot } from 'recoil';
import Router from './router/Router';

const App: React.FC = () => {
  return (
    <div>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
};

export default App;
