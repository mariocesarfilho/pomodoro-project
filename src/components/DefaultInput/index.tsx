import styles from "./styles.module.css";

type InputType = {
  type: "text" | "number";
  id: string;
};

// Pegar os tipos do input
// type InputType = {} & React.ComponentProps<'input'>;
// Dessa forma eu consigo pegar todos os tipos que um input permite

export function DefaultInput({ type, id }: InputType) {
  return (
    <>
      <label className={styles.labelTask} htmlFor={id}>
        Task
      </label>
      <input id={id} className={styles.inputTask} type={type} />
    </>
  );
}
