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
          </menu>
          <div>
            <button>
              <img src={Twitter} alt="Twitter" />
            </button>
            <button>
              <img src={Logo} alt="Logo" />
            </button>
          </div>
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
