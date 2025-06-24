import './Sidebar.css';
export default function Sidebar({ activePage, onNavigate }) {
  const navItems = [
    { name: 'Dashboard' },
    { name: 'Diagnostics', },
    { name: 'Settings' },
    { name: 'Logout' }
  ];

  return (
    <aside className="sidebar">
      <div className="logo">Shadow Vpn</div>
      <ul className="nav">
        {navItems.map((item) => (
          <li
          key={item.name}
          className={activePage === item.name ? 'nav-item active' : 'nav-item'}
          onClick={() => onNavigate(item.name)}
          >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.name}</span>
        </li>
        ))}
      </ul>
    </aside>
  );
}
