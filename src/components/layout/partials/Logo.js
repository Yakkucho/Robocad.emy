import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  return (
    <div
      {...props}
      className={className}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/logo.png')}
            alt="Robocad"
            width={32}
            height={32} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;