import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

export const Icon = (props: IconPropsType) => {
  return (

      <svg width={props.width || "50px"}  height={props.height || "50px"} viewBox={props.height || "0 0 500 500"} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
      </svg>
  );
};

