import React, {FC} from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button: FC<IProps> = ({text, type, className, ...props}) => {
  return (
    <button className={`${className} button`} type={type} {...props}>
      {text}
    </button>
  );
};
