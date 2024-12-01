import styles from '../styles/Economy.module.css';

const Economy = () => {
    return (
        <section className={styles.economy}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <h1 className={styles.title}>Цифровая экономика: основные тренды</h1>
                    <p className={styles.paragraph}>
                        Цифровая экономика — это современный формат организации экономической деятельности, 
                        где основой выступают цифровые технологии. Такие подходы позволяют не только повышать производительность, 
                        но и улучшать качество товаров и услуг. Внедрение автоматизации, искусственного интеллекта, облачных решений 
                        и аналитики больших данных способствует эффективному управлению ресурсами.
                    </p>
                    <p className={styles.paragraph}>
                        Ключевыми элементами цифровизации являются электронная коммерция, онлайн-сервисы и цифровые финансовые платформы, 
                        которые способствуют развитию глобальной экономики. Инновационные подходы помогают компаниям строить новые бизнес-модели, 
                        ускорять внедрение технологий и укреплять связь с клиентами.
                    </p>
                </div>
                <div className={styles.mediaBlock}>
                    <div className={styles.graphContainer}>
                        <iframe width="720" height="405" src="https://rutube.ru/play/embed/0346d6d12605482e534576e613904ae7/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.image}
                            src="https://f8c516af-6f59-47e3-8f24-030c8538249e.selstorage.ru/user95089/project_145698.jpg"
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
                    Источник: https://www.acjournal.ru/jour/article/view/1079?locale=ru_RU
                </a>
            </footer>
        </section>
    );
};

export default Economy;
