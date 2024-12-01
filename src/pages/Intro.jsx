import styles from '../styles/Intro.module.css';

const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <h1 className={styles.title}>Современное состояние ИКТ и ИТ</h1>
                    <p className={styles.paragraph}>
                        Интернет-технологии (ИТ) играют ключевую роль в современной жизни, активно развиваясь в технологическом и социальном контекстах. 
                        На технологическом уровне наблюдается стремительный рост вычислительных мощностей, развитие высокоскоростных сетей связи 
                        (например, 5G) и увеличение доступности облачных сервисов. Эти изменения позволяют быстрее обрабатывать и передавать огромные объемы данных, 
                        обеспечивая непрерывное функционирование бизнеса, государственных структур и частных пользователей.
                    </p>
                    <p className={styles.paragraph}>
                        В социальном контексте Интернет-технологии становятся неотъемлемой частью повседневной жизни. Появляются новые формы взаимодействия, 
                        такие как социальные сети и онлайн-платформы, которые трансформируют способы общения, ведения бизнеса и получения информации. Ускоряется процесс интеграции 
                        ИТ в образование, медицину, транспорт и другие социальные институты, что способствует цифровизации общества в целом.
                    </p>
                </div>
                <div className={styles.mediaBlock}>
                    <video controls src="https://thumbs.dreamstime.com/videothumb_large20829/208292608.webm"> Ваш браузер не поддерживает HTML5-видео </video>
                    <img src="https://d2xqcz296oofyv.cloudfront.net/wp-content/uploads/mobile-network-generations.webp" alt="Развитие интернета" />
                </div>
            </div>
            <footer className={styles.footer}>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sourceLink}
                >
                    Источник: https://age-info.com/2019/06/роль-новых-информационных-технологи
                </a>
            </footer>
        </section>
    );
};

export default Introduction;
