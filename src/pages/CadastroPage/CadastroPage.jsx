import styles from './CadastroPage.module.css';
import config from '../../config';

import FormLoginCadastro from '../../components/FormLoginCadastro/FormLoginCadastro'

const CadastroPage = () => {

  const onSubmit = async (formData) => {
    const { username, email, password, re_password } = formData;

    if (password !== re_password) {
      alert('As senhas não coincidem!')
    } else {
        try {
          const response = await fetch(`${config.API_URL}/users/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password, re_password }),
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Erro ao registrar usuário');
          }
    
          const data = await response.json();
          console.log('Registro bem-sucedido:', data);
        } catch (error) {
          console.error('Erro:', error);
          throw error;
        }
    }
  };

  return (
    <div className={styles.mainContainerCadastro}>
      <FormLoginCadastro 
        title={'Cadastrar-se'}
        buttonText={'Enviar'}
        isCadastro={true}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default CadastroPage;


