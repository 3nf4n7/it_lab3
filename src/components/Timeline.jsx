import { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/Timeline.module.css';
import { useNavigate } from 'react-router-dom'; 

const Timeline = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeline = gsap.timeline();
        timeline
            .fromTo('#web0', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 })
            .fromTo('#web1', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 }, "+=0.5")
            .fromTo('#web2', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 }, "+=0.5")
            .fromTo('#web3', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 }, "+=0.5")
            .fromTo('#web4', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 }, "+=0.5")
            .fromTo('#web5', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 }, "+=0.5");
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.timeline}>
            <div id="web0" className={styles.point} onClick={() => handleNavigate('/intro')}>
                <h3>Введение</h3>
                <p>Современное состояние развития инфокоммуникационных технологий (ИКТ) и Интернет-технологий (ИТ)</p>
            </div>
            <div id="web1" className={styles.point} onClick={() => handleNavigate('/economy')}>
                <h3>Цифровая экономика</h3>
                <p>Основные тренды цифровизации, новые цифровые бизнес-модели</p>
            </div>
            <div id="web2" className={styles.point} onClick={() => handleNavigate('/industry')}>
                <h3>Индустрия 4.0</h3>
                <p>Умные фабрики, IoT, робототехника</p>
            </div>
            <div id="web3" className={styles.point} onClick={() => handleNavigate('/web3')}>
                <h3>Понятие Web 3.0 и ключевые тренды</h3>
                <p>Основы Web 3.0: децентрализация, блокчейн, смарт-контракты, dApps</p>
            </div>
            <div id="web4" className={styles.point} onClick={() => handleNavigate('/secur')}>
                <h3>Проблемы безопасности и приватности в Web 3.0</h3>
                <p>Основные вызовы и подходы к их решению</p>
            </div>
            <div id="web5" className={styles.point} onClick={() => handleNavigate('/ending')}>
                <h3>Заключение</h3>
                <p>Подведение итогов, перспективы Web 3.0</p>
            </div>
        </div>
    );
};

export default Timeline;

