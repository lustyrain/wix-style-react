import * as React from 'react';

export interface AvatarProps {
  name?: string;
  text?: string;
  placeholder?: React.ReactNode;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  ariaLabel?: string;
  title?: string;
  shape?: 'circle' | 'square';
  size?:
    | 'size90'
    | 'size72'
    | 'size60'
    | 'size48'
    | 'size36'
    | 'size30'
    | 'size24'
    | 'size18';
  color?: 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6';
  className?: string;
  dataHook?: string;
  presence?: 'online' | 'offline' | 'busy';
  indication?: React.ReactNode;
  onIndicationClick?(): void;
  onClick?(): void;
}

declare const Avatar: React.SFC<AvatarProps>;
export default Avatar;
