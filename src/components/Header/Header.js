import React from 'react';
import './styles.css';

const Header = () => (
  <div className="HeaderContainer">
      <div className="HeaderItemContainer">
          <div className="HeaderItems HeaderItems--left">
              <a href="/groei" className="HeaderButton">Groei</a>
              <a href="/eet" className="HeaderButton">Eet</a>
          </div>
          <div className="HeaderItems HeaderItems--right">
              <a href="/login" className="HeaderButton">Log in</a>
          </div>
      </div>
  </div>
);

export default Header;
