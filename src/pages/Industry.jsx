import styles from '../styles/Economy.module.css';

const Industry = () => {
    return (
        <section className={styles.economy}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <h1 className={styles.title}>Индустрия 4.0: роль и перспективы ИТ</h1>
                    <p className={styles.paragraph}>
                        Индустрия 4.0 — это концепция, основанная на интеграции цифровых технологий в производство и создание так называемых «умных фабрик». Главные элементы этого направления включают автоматизацию, робототехнику, Интернет вещей (IoT), а также использование искусственного интеллекта и анализа данных для принятия решений в режиме реального времени.
                    </p>
                    <p className={styles.paragraph}>
                        Перспективные ИТ в рамках Индустрии 4.0 включают развитие киберфизических систем, которые позволяют автоматизировать производственные процессы, улучшить контроль и управление ресурсами. Большое значение имеют технологии 3D-печати и виртуальной реальности, которые трансформируют производственные линии и открывают новые возможности для прототипирования и тестирования продуктов.
                    </p>
                </div>
                <div className={styles.mediaBlock}>
                    <div className={styles.graphContainer}>
                        <iframe width="500" height="300" src="https://rutube.ru/play/embed/edd4a1fcd4f477663eb1241542d701bc/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.image}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Industry_4.0.png/1200px-Industry_4.0.png"
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
                    Источник: https://trends.rbc.ru/trends/industry/5e740c5b9a79470c22dd13e7
                </a>
            </footer>
        </section>
    );
};

export default Industry;

