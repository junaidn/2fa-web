import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {Layout} from './components/Layout/Layout';
import {Header} from './components/Header/Header';
import {AddService} from './components/AddService/AddService';
import {AuthCodeStore} from './mobx-store/AuthCodeStore';
import {addNewServicePage, homePage} from './utils/app-routes';

const store = new AuthCodeStore();

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path={homePage} element={<Home authStore={store} />} />
            <Route
              path={addNewServicePage}
              element={<AddService authStore={store} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

setInterval(() => {
  store.getCodes().length > 0 && store.updateTimerAndRegenrateCode();
}, 1000);
