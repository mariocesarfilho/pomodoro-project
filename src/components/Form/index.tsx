import { CirclePauseIcon, CirclePlayIcon, PlayIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";
import { DefaultInput } from "../DefaultInput";

export function Form() {
  const [event, setEvent] = useState(false);

  function pause() {
    setEvent(!event);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(event);

  return (
    <>
      <form className={styles.formContainer} action="" onSubmit={handleSubmit}>
        <div className={styles.formHeading}>
          <DefaultInput id="inputTask" type="text" labelText="Task" />
        </div>

        <div className="container">
          <p>Nesse ciclo foque por 25 minutos</p>
        </div>

        <div className="container">
          <p>Ciclos:</p>
          <p>0 0 0 0 0 0 0 </p>
        </div>

        <div className="container">
          <button 
          className={styles.buttonTask}
          onClick={() => pause()}
          type="submit"
          >
            {event ? <CirclePauseIcon /> : <CirclePlayIcon />}
          </button>
        </div>
      </form>
    </>
  );
}
