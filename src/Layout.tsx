import React from 'react';

import './asset/styles/layout.scss';

import Logo from './asset/image/hd-logo.png';
import Twitter from './asset/image/hd-twitter.png';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <div className="header">
          <input type="checkbox" id="openable" />
          <label className="hamburger" htmlFor="openable">
            <span></span>
          </label>
          <menu>
            <ul className="menu">
              <li>
                <a href={'/'}>Introduce</a>
              </li>
              <li>
                <a href={'/'}>Roadmap</a>
              </li>
              <li>
                <a href={'/'}>Contact</a>
              </li>
              <li>
                <a href={'/'}>Q&A</a>
              </li>
            </ul>
            <div className="logo">
              <a href={'/'}>
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href={'/'}>
                <img src={Logo} alt="Logo" />
              </a>
            </div>
          </menu>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
};

export default Layout;
