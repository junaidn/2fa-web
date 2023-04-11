import React, {FC} from 'react';
import {Image} from '../Image/Image';
import {epicGameImage} from '../../utils/images';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

export const AuthDetail: FC<Omit<AuthCode, 'createdAt'>> = ({
  code,
  service,
  timer,
}) => {
  return (
    <div className="auth-detail">
      <div className="auth-detail__code-detail">
        <Image src={epicGameImage} />
        <div>
          <span>{service}</span>
          <p>{code}</p>
        </div>
      </div>
      <div className="spinner">
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#B0B0B0',
            textSize: 28,
            textColor: '#B0B0B0',
          })}
          value={timer}
          maxValue={60}
          text={`${timer}`}
        />
      </div>
    </div>
  );
};
