import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import React from 'react';
import { RecoilRoot } from 'recoil';
import Router from './router/Router';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
