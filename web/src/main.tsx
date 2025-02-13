import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import Home from './components/Home';
import Info from './components/Info';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="info" element={<Info />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
