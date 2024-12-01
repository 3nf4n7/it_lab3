import { useRef } from 'react';
import styles from '../styles/AudioPlayer.module.css';

const AudioPlayer = () => {
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    return (
        <div className={styles.audioPlayer}>
            <button onClick={togglePlay}>🎵 Включить/Остановить музыку</button>
            <audio ref={audioRef} controls style={{ display: 'none' }}>
                <source src="assets/audio/background-music.mp3" type="audio/mpeg" />
                Ваш браузер не поддерживает воспроизведение аудио.
            </audio>
        </div>
    );
};

export default AudioPlayer;
