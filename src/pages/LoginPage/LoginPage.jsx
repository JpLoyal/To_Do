import styles from './LoginPage.module.css';
import FormLoginCadastro from '../../components/FormLoginCadastro/FormLoginCadastro';
import config from '../../config';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const LoginPage = () => {
  
  const navigate = useNavigate()
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
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();
      
      const tokenDeAcesso = data.access;
      login(tokenDeAcesso);

      navigate('/home')

    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao fazer login. Por favor, tente novamente.');
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
