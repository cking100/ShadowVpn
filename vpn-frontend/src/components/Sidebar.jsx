import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; 
export default function Sidebar() {
  const { theme, toggleTheme } = useTheme(); 

  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Connection', path: '/connection' },
    { name: 'Diagnostics', path: '/diagnostics' },
    { name: 'Settings', path: '/settings' },
    { name: 'Logout', path: '/logout' },
  ];
  return (
    <aside className="sidebar">
      <div className="logo">Shadow VPN</div>

      <ul className="nav">
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span className="label">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? ' Light Mode' : ' Dark Mode'}
        </button>
      </div>
    </aside>
  );
}
