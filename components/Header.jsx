import Link from 'next/link';
import styles from '../styles/layout.module.css';



const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <span>Accueil</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span>Projets</span>
            </Link>
          </li>
          <li>
            <Link href="/skill">
              <span>Compétences</span>
            </Link>
          </li>
          <li>
            <Link href="/INR">
              <span>INR</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span>Contacts</span>
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
