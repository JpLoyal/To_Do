import React, { useState } from 'react';
import styles from './FormLoginCadastro.module.css';

import Alert from 'react-bootstrap/Alert';

const FormComponent = ({ title, isCadastro, buttonText, onSubmit }) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRe_password] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (isCadastro) {
      validatePasswords(e.target.value, re_password);
    }
  };

  const handleRe_passwordChange = (e) => {
    setRe_password(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (password, re_password) => {
    if (password !== re_password) {
      setError('As senhas não coincidem');
    } else {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isCadastro && password !== re_password) {
      setError('As senhas não coincidem');
      return;
    }
    try {
      await onSubmit({ username, email, password, re_password });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <div className={styles.containerLabelInput}>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleUsernameChange}
          required/>
      </div>

      {isCadastro && (
        <>
          <div className={styles.containerLabelInput}>
            <label htmlFor="email">Email:</label>
            <input 
              type="text"
              id="email"
              name="email"
              onChange={handleEmailChange}
              required/>
          </div>
        </>
      )}

      <div className={styles.containerLabelInput}>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required/>
      </div>

      {isCadastro && (
        <>
          <div className={styles.containerLabelInput}>
            <label htmlFor="againPassword">Repita a senha:</label>
            <input
            type="password"
            id="againPassword"
            name="againPassword"
            onChange={handleRe_passwordChange}
            required/>
          </div>
        </>
      )}

      {error && 
        <Alert variant={'danger'} className={styles.errorAlert}>{error}</Alert>
      }

      <button type="submit" className={styles.btnLogin}>{buttonText}</button>
    </form>
  );
};

export default FormComponent;