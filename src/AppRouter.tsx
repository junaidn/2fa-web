import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {Layout} from './components/Layout/Layout';
import {Header} from './components/Header/Header';

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};
