import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="header">
      <div className="logo">
        <h3>Shadow Vpn</h3>
      </div>

      <div className="header-right">
        <button className="settings-icon">
          <i className="fas fa-cog"></i>
        </button>

        <div className="profile">
          <div className="avatar" onClick={toggleMenu}>
            CT
          </div>

          {showMenu && (
            <div className="profile-dropdown">
              <p> View Profile</p>
              <p> Edit Profile</p>
              <p> Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
