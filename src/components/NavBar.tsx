import React from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, Outlet } from 'react-router-dom'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>The Saree Shop</Link>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link to="/" className={`${styles.navLink} ${styles.shoppingStyle}`}>Shopping</Link></li>
            <li className={styles.navItem}><Link to="/cart" className={styles.navLink}>
              <IconButton aria-label="view cart with 2 items">
                <Badge badgeContent={2} color="primary" ><ShoppingCartIcon sx={{ color: '#fff' }} /></Badge>
              </IconButton>
            </Link></li>
            <li className={styles.navItem}><Button component={Link} to="/admin" size="medium" sx={{ color: '#fff' }} className={`${styles.navLink} ${styles.shoppingStyle}`}>Sign In</Button></li>
            <li className={styles.navItem}><Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default NavBar