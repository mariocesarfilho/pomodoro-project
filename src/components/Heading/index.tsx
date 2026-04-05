import styles from './styles.module.css';

type HeadingProps = {
    // Tudo que react aceita como tipo, está neste tipo ReactNode
    children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>
}