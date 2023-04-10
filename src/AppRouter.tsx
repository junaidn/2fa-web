import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './Home';
import {Layout} from './components/Layout/Layout';
import {Header} from './components/Header/Header';

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
};
