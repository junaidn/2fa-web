import React, {FC} from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
}

export const IconButton: FC<IProps> = ({icon, title, ...props}) => {
  return (
    <button className="icon-button" title={title} {...props}>
        {icon}
    </button>
  );
};
