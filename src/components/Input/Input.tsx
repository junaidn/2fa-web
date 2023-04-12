import React, {FC} from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: boolean;
  helpText?: string;
}

export const Input: FC<IProps> = ({
  label,
  type = 'text',
  isError = false,
  helpText = '',
  placeholder,
  ...props
}) => {
  return (
    <div className="input-container">
      <label className="input-container__label">{label}</label>
      <input
        data-testid="input-test"
        className={isError ? 'input-error' : ''}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {isError && <label className="error-text">{helpText}</label>}
    </div>
  );
};
