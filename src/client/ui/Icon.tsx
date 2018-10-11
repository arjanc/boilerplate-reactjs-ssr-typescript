import * as React from 'react';
// @ts-ignore
import Icons from './../assets/icons.svg';

interface IconProps {
  name: string,
  color: string,
  size: number,
}

const Icon: React.SFC<IconProps> = ({ name, color, size }) => (
  <svg fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

export default Icon;