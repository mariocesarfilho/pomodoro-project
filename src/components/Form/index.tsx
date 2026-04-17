import { CirclePauseIcon, CirclePlayIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";

export function Form() {
  return (
    <>
      <form className={styles.formContainer} action="">
        <div className={styles.formHeading}>
          <DefaultInput
            id="inputTask"
            type="text"
            labelText="Task"
            placeholder="Digite Aqui!"
          />
        </div>

        <div className="container">
          <p>Nesse ciclo foque por 25 minutos</p>
        </div>

        <div className="container">
          <Cycles />
        </div>

        <div className="container">
          <DefaultButton icon={<CirclePlayIcon />} />
        </div>
      </form>
    </>
  );
}
