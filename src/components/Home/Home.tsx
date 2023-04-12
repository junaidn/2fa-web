import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {AuthDetail} from '../AuthDetail/AuthDetail';
import {addNewServicePage} from '../../utils/app-routes';
import {Link} from 'react-router-dom';

export const Home: FC<AuthStore> = observer(({authStore}) => {
  return (
    <div className="home">
      {authStore.getServices().map(({code, service, timer}) => (
        <AuthDetail key={code} code={code} service={service} timer={timer} />
      ))}
      {authStore.getServices().length === 0 && (
        <p className="home__instruction-text">
          No authentications added. <br /> Add a new 2FA verification service.{' '}
          <Link to={addNewServicePage}>Add</Link>
        </p>
      )}
    </div>
  );
});
