import React from 'react';
import styles from './FormLoginCadastro.module.css';

const FormComponent = ({ title, type, buttonText, onSubmit }) => {
  return (
    <form className={styles.formLogin} onSubmit={onSubmit}>
      <h1>{title}</h1>
      <div className={styles.containerLabelInput}>
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className={styles.containerLabelInput}>
        <label htmlFor="password">Senha:</label>
        <input type={type} id="password" name="password" />
      </div>
      <button type="submit" className={styles.btnLogin}>{buttonText}</button>
    </form>
  );
};

export default FormComponent;