import styles from './CadastroPage.module.css'

import FormLoginCadastro from '../../components/FormLoginCadastro/FormLoginCadastro'


const CadastroPage = () => {
  return (
    <div className={styles.mainContainerCadastro}>
      <FormLoginCadastro 
        title={'Cadastrar-se'}
        buttonText={'Realizar Cadastro'}
        type={'password'}
      />
    </div>
  )
}

export default CadastroPage;


