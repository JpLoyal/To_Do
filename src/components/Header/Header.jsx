import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbarHeader}>
        <ul className={styles.ulHeader}> 
            <li className={styles.liHeader}><a href="#" className={styles.ancorasHeader}>Home</a></li>
            <li className={styles.liHeader}><a href="#" className={styles.ancorasHeader}>Features</a></li>
            <li className={styles.liHeader}><a href="#" className={styles.ancorasHeader}>Pricing</a></li>
            <li className={styles.liHeader}><a href="#" className={styles.ancorasHeader}>FAQs</a></li>
            <li className={styles.liHeader}><a href="#" className={styles.ancorasHeader}>About</a></li>
        </ul>
      </nav>
      <section className={styles.containerBotoes}>
        <Link to='/login'><button className={styles.botoesLoginSub}>Entrar</button></Link>
        <Link to='/cadastro'><button className={styles.botoesLoginSub}>Cadastrar-se</button></Link>
      </section>
    </header>
)};

export default Header;
