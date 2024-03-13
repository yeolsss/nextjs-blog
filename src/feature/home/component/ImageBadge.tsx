'use client';
import React from 'react';

interface Props {
  name: string;
  color: string;
  logoColor: string;
}

const ImageBadge: React.FC<Props> = ({ name, color, logoColor }) => {
  return (
    <img
      src={`https://img.shields.io/badge/${name}-${color}?style=flat-square&logo=${name}&logoColor=${logoColor}`}
      alt={name}
      className="h-20 rounded-md md:h-16 lg:h-20 max-sm:h-10"
    />
  );
};

export default ImageBadge;
