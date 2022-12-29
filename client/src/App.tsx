import React from 'react';
import Router from './router/Router';
import { RecoilRoot } from 'recoil';

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
