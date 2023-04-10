import React from 'react';
import {IconButton} from '../IconButton/IconButton';
import {FaPlus} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {addNewServicePage} from '../../utils/app-routes';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
        <div className="header__container">
            <h3>2FA App</h3>
            <IconButton icon={<FaPlus size={18} color="#f6989b" />} onClick={() => navigate(addNewServicePage)} />
        </div>
    </header>
  );
};