import Timeline from './Timeline';
import AudioPlayer from './AudioPlayer';
import styles from '../styles/Introduction.module.css';

const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Погружение в мир Web 3.0</h1>
                <p className={styles.description}>
                    Добро пожаловать в эпоху децентрализованного интернета!
                    Узнайте, как технологии изменяют наше взаимодействие с цифровым миром.
                </p>
            </div>
            <Timeline />
            <AudioPlayer />
        </section>
    );
};

export default Introduction;
