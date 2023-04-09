import React, {FC} from 'react';

interface IProps {
    children: Children;
}

export const Layout: FC<IProps> = ({children}) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
};
