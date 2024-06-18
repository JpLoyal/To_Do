import React, { useState, useEffect } from 'react';
import styles from './FormLoginCadastro.module.css';
import { Link } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';

const FormComponent = ({ title, isCadastro, buttonText, onSubmit, error }) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRe_password] = useState('');
  const [formErrors, setFormErrors] = useState([]);
  const [apiErrors, setApiErrors] = useState([]);

  useEffect(() => {
    // Limpa os erros ao receber um novo erro da API
    if (error) {
      const apiErrors = Object.values(error).flat();
      setApiErrors(apiErrors);
    }
  }, [error]);

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
      setFormErrors(['As senhas não coincidem']);
    } else {
      setFormErrors([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiErrors([]); // Limpa os erros recebidos da API

    if (isCadastro && password !== re_password) {
      setFormErrors(['As senhas não coincidem']);
      return;
    }
    try {
      await onSubmit({ username, email, password, re_password });
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      setApiErrors([err.message]);
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

      {(formErrors.length > 0 || apiErrors.length > 0) && (
        <Alert variant={'danger'} className={styles.errorAlert}>
          {formErrors.map((errorMessage, index) => (
            <p key={`form-error-${index}`} className={styles.errorMessage}>{errorMessage}</p>
          ))}
          {apiErrors.map((errorMessage, index) => (
            <p key={`api-error-${index}`} className={styles.errorMessage}>{errorMessage}</p>
          ))}
        </Alert>
      )}
      
      <button type="submit" className={styles.btnLogin}>{buttonText}</button>
      <Link to='/'><button type="button" className={styles.btnVoltar}>Voltar</button></Link>
    </form>
  );
};

export default FormComponent;