import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.mainContainerLogin}>
      <form className={styles.formLogin}>
        <h1>Fazer Login</h1>
        <div className={styles.containerLabelInput}>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className={styles.containerLabelInput}>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit" className={styles.btnLogin}>Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
