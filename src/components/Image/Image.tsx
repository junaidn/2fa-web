import React, {FC} from 'react';

export const Image: FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({src, alt, ...props}) => {
  return (
    <img src={src} {...props} alt={alt || 'Image preview'} />
  );
};

