import styles from './LoginPage.module.css';
import FormLoginCadastro from '../../components/FormLoginCadastro/FormLoginCadastro';
import config from '../../config';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const LoginPage = () => {

  const { login } = useContext(AuthContext) 

  const onSubmit = async (formData) => {
    const { username, password } = formData;

    try {
      const response = await fetch(`${config.API_URL}/jwt/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Erro ao fazer login');
      }

      const data = await response.json();
      
      const tokenDeAcesso = data.access;
      login(tokenDeAcesso);

    } catch (error) {
      console.error('Erro:', error);
      throw error;
    }
  }; // Fechando a função onSubmit corretamente aqui

  return (
    <div className={styles.mainContainerLogin}>
      <FormLoginCadastro 
        title={'Fazer Login'}
        buttonText={'Entrar'}
        onSubmit={onSubmit}
      />
    </div>
  );
}; // Fechando o componente LoginPage corretamente aqui

export default LoginPage;
