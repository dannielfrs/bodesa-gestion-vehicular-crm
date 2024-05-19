import React from 'react';
import { Avatar as AvatarPrime, AvatarProps } from 'primereact/avatar';
import PropTypes from 'prop-types';

interface CustomAvatarProps extends AvatarProps {
  imageFallback?: string;
  onImageError?: () => void;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({
  icon,
  image,
  imageAlt = '',
  imageFallback,
  onImageError,
  label,
  size,
  shape,
  className = ''
}) => {
  return (
    <AvatarPrime
      icon={icon}
      image={image}
      imageAlt={imageAlt}
      imageFallback={imageFallback}
      onImageError={onImageError}
      label={label}
      size={size}
      shape={shape}
      className={className}
    />
  );
};

CustomAvatar.propTypes = {
  className: PropTypes.string
};

export default CustomAvatar;