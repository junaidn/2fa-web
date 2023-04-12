import React, {useState, FC} from 'react';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import {useNavigate} from 'react-router-dom';
import {homePage} from '../../utils/app-routes';
import {observer} from 'mobx-react-lite';

export const AddService: FC<AuthStore> = observer(({authStore}) => {
  const [serviceName, setServiceName] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceName) {
      setError(true);
      return;
    }
    setError(false);
    authStore.addService(serviceName);
    navigate(homePage);
  };

  return (
    <div className="add-service">
      <h2>Add new service</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Service"
          onChange={(e) => setServiceName(e.target.value)}
          helpText="Incorrect service name"
          isError={error}
        />
        <div>
          <Button type="submit" text="Add" />
        </div>
      </form>
    </div>
  );
});
