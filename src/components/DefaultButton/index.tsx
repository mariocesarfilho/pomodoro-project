import styles from './styles.module.css'


type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
}


export function DefaultButton({ icon, color = 'green' }: DefaultButtonProps) {


  return (
    <>
        <button className={`${styles.buttonPlay} ${styles[color]}`} >{icon}</button>
    </>
  );
}
