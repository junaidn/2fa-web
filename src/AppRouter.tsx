import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './Home';
import {Layout} from './components/Layout/Layout';

export const AppRouter = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
