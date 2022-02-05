import styles from './Header.module.css';

const Header = () => {
  return(
    <header className={styles.header}>
      <img src='https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1' alt="logo" />
    </header>
  )
}

export default Header;