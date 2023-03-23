import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import React from 'react';
import { RecoilRoot } from 'recoil';
import Router from './router/Router';
import MetaTag from './components/reuse/SEOMetaTag';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  const mainMeta = {
    title: 'Costagram',
    description: 'Instagram 서비스를 바탕으로 구현한 소셜 웹서비스',
    url: 'favicon.ico',
    imagesrc: 'Costagram.png',
    keywords: 'Instagram, Costgram, SNS',
  };

  return (
    <>
      <MetaTag item={mainMeta} />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
};

export default App;
