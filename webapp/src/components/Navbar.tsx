import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav style={{
    background: 'var(--card-bg)',
    borderBottom: '1px solid var(--border-color)',
    padding: '0 24px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  }}>
    <div style={{
      maxWidth: 1400,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      height: 64,
      gap: 32,
    }}>
      <span style={{
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--brand-indigo)',
        letterSpacing: '-0.3px',
      }}>
        Storelytics
      </span>
      <div style={{ display: 'flex', gap: 4 }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            padding: '8px 16px',
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            background: isActive ? 'var(--brand-indigo)' : 'transparent',
            color: isActive ? '#fff' : 'var(--text-secondary)',
            transition: 'all 0.15s',
          })}
        >
          Analytics
        </NavLink>
        <NavLink
          to="/sustainability"
          style={({ isActive }) => ({
            padding: '8px 16px',
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            background: isActive ? 'var(--brand-indigo)' : 'transparent',
            color: isActive ? '#fff' : 'var(--text-secondary)',
            transition: 'all 0.15s',
          })}
        >
          Sustainability
        </NavLink>
      </div>
    </div>
  </nav>
)
