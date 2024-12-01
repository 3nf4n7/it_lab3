import { Link } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><Link to="/">Введение</Link></li>
                <li><Link to="/economy">Цифровая экономика</Link></li>
                <li><Link to="/industry">Индустрия 4.0</Link></li>
                <li><Link to="/web3">Web 3.0</Link></li>
                <li><Link to="/secur">Безопасность</Link></li>
                <li><Link to="/ending">Заключение</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
