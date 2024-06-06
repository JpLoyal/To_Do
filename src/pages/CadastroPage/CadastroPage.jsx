import styles from './CadastroPage.module.css';
import config from '../../config';
import { useState } from 'react';

import FormLoginCadastro from '../../components/FormLoginCadastro/FormLoginCadastro'

const CadastroPage = () => {

  const [error, setError] = useState(null);

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
            setError(errorData);
            throw new Error('Erro na solicitação');
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
        error={error}
      />
    </div>
  )
}

export default CadastroPage;


