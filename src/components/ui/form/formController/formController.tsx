import React, { useState } from 'react';
import styles from './formController.module.css';
import { FormControllerProps } from './formController.type';

const formController = ({
  children,
  id,
  label,
  required: isRequired
}: FormControllerProps) => {
  const [message, setMessage] = useState('');
  const messageBlock = message ? <div>message</div> : null;
  const required = isRequired ? '*' : null;
  return (
    <div>
      <div className={styles.elementController}>
        <label className={styles.label} htmlFor={id}>
          {label} {required}
        </label>
        {children}
      </div>
      {messageBlock}
    </div>
  );
};

formController.displayName = 'FormController';

export default formController;
