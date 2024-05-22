import styles from './LoginPage.module.css';
import FormLoginCadastro from '../../components/FormLoginCadastro/FormLoginCadastro';

const LoginPage = () => {
  return (
    <div className={styles.mainContainerLogin}>
      <FormLoginCadastro 
        title={'Fazer Login'}
        buttonText={'Entrar'}
      />
    </div>
  );
};

export default LoginPage;
