import React from 'react';
import './styles.css';

const Header = () => (
  <div className="HeaderContainer">
      <div className="HeaderItemContainer">
          <div className="HeaderItems HeaderItems--left">
              <text className="HeaderButton">Groei</text>
              <text className="HeaderButton">Eet</text>
          </div>
          <div className="HeaderItems HeaderItems--right">
              <text className="HeaderButton">Log in</text>
          </div>
      </div>
  </div>
);

export default Header;
