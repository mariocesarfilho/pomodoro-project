import styles from './styles.module.css';

export function Cycles() {
    return (
        <div className={styles.container}>
            <strong>Ciclos:</strong>
            <div className={styles.containerCiclos}>  
                <div className={`${styles.containerCiclo} ${styles.workTime}`}></div>
                <div className={`${styles.containerCiclo} ${styles.shortBreakTime}`}></div>
                <div className={`${styles.containerCiclo} ${styles.workTime}`}></div>
                <div className={`${styles.containerCiclo} ${styles.shortBreakTime}`}></div>
                <div className={`${styles.containerCiclo} ${styles.workTime}`}></div>
                <div className={`${styles.containerCiclo} ${styles.shortBreakTime}`}></div>
                <div className={`${styles.containerCiclo} ${styles.workTime}`}></div>
                <div className={`${styles.containerCiclo} ${styles.longBreakTime}`}></div>
            </div>
        </div>
    );
}