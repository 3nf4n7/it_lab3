import styles from '../styles/Economy.module.css';

const Web3 = () => {
    return (
        <section className={styles.economy}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <h1 className={styles.title}>Понятие Web 3.0 и ключевые технологические тренды</h1>
                    <p className={styles.paragraph}>
                        Web 3.0 — это концепция следующего поколения Интернета, основанная на децентрализации данных и более интеллектуальном взаимодействии между пользователями и устройствами. Основные технологические тренды Web 3.0 включают развитие блокчейна, смарт-контрактов и децентрализованных приложений (dApps). Эти технологии обеспечивают более безопасное и автономное управление данными и взаимодействие в сети, минимизируя зависимость от централизованных платформ.
                    </p>
                    <p className={styles.paragraph}>
                        Семантический веб, который является важной частью Web 3.0, направлен на улучшение возможностей Интернета по интерпретации и обработке данных, что позволяет системам более точно и эффективно отвечать на запросы пользователей. Web 3.0 также предполагает усиление приватности и конфиденциальности данных, что особенно актуально в эпоху растущей озабоченности по поводу кибербезопасности и защиты персональной информации.
                    </p>
                    <p className={styles.paragraph}>
                        Таким образом, современное состояние развития ИТ и ИКТ демонстрирует мощный прогресс как в технологической, так и в социальной сферах, что способствует трансформации ключевых отраслей и ускорению процессов цифровизации.
                    </p>
                </div>
                <div className={styles.mediaBlock}>
                    <div className={styles.graphContainer}>
                        <iframe width="500" height="300" src="https://rutube.ru/play/embed/0481747d9b6e956e88b1fadd9811ff4a/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.image}
                            src="https://ixbt.online/live/images/original/27/47/84/2022/12/05/288a4ea43b.png"
                            alt="Визуализация цифровой экономики"
                        />
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sourceLink}
                >
                    Источник: https://habr.com/ru/articles/653533/
                </a>
            </footer>
        </section>
    );
};

export default Web3;

