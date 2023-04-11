import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {AuthCodeStore} from '../../mobx-store/AuthCodeStore';
import {AuthDetail} from '../AuthDetail/AuthDetail';
import {addNewServicePage} from '../../utils/app-routes';

const store = new AuthCodeStore();

export const Home = observer(() => {
  useEffect(() => {
    setInterval(() => {
      store.getCodes().length > 0 && store.updateTimerAndRegenrateCode();
    }, 1000);
  }, []);

  return (
    <div className="home">
      {store.getCodes().map(({code, service, timer}) => (
        <AuthDetail key={code} code={code} service={service} timer={timer} />
      ))}
      {store.getCodes().length === 0 && (
        <p className="home__instruction-text">
          No authentications added. <br /> Add a new 2FA verification service.{' '}
          <a href={addNewServicePage}>Add</a>
        </p>
      )}
    </div>
  );
});
