import React from 'react';
import styles from './FormLoginCadastro.module.css';

const FormComponent = ({ title, isCadastro, buttonText, onSubmit }) => {
  return (
    <form className={styles.formLogin} onSubmit={onSubmit}>
      <h1>{title}</h1>
      <div className={styles.containerLabelInput}>
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className={styles.containerLabelInput}>
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" />
      </div>

      {isCadastro && (
        <>
          <div className={styles.containerLabelInput}>
            <label htmlFor="againPassword">Repita a senha:</label>
            <input type="password" id="againPassword" name="againPassword" />
          </div>
          <div className={styles.containerLabelInput}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
        </div>
        </>
      )}

      <button type="submit" className={styles.btnLogin}>{buttonText}</button>
    </form>
  );
};

export default FormComponent;