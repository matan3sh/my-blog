import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/blogs'>Blogs</Link>
      <Link to='/about'>About</Link>
    </div>
  );
};

export default Header;
