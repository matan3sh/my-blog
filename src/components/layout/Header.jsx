import React from 'react';
import { Link } from 'gatsby';

import * as headerStyles from 'styles/components/layout/Header.module.scss';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.headerTitle}>I am Header</h1>
      <h2 className={headerStyles.headerSubtitle}>I am Header Subtitle</h2>
      <Link to='/'>Home</Link>
      <Link to='/blogs'>Blogs</Link>
      <Link to='/about'>About</Link>
    </div>
  );
};

export default Header;
