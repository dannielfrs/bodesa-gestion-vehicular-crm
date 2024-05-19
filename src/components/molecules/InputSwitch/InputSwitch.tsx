import React, { useState } from "react";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import styles from './InputSwitch.module.scss'

export default function BasicDemo() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={styles.switch}>
      <InputSwitch 
        checked={checked} 
        onChange={(e: InputSwitchChangeEvent) => setChecked(e.value)} 
      />
      <p className={styles.label}>{ checked ? 'Desactivar' : 'Activar'}</p>
    </div>
  )
}