import React from 'react';
import {IconButton} from '../IconButton/IconButton';
import {FaPlus} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {addNewServicePage, homePage} from '../../utils/app-routes';
import {Link} from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__container">
        <Link to={homePage}>Authenticator</Link>
        <IconButton
          title="Add new service"
          icon={<FaPlus size={18} color="#f6989b" />}
          onClick={() => navigate(addNewServicePage)}
        />
      </div>
    </header>
  );
};
