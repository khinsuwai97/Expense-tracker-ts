import React, { PropsWithChildren } from 'react';
import './Card.css';

const Card: React.FC<PropsWithChildren<{ className: string }>> = ({
  children,
  className,
}) => {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
