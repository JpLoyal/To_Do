import React from 'react';
import styles from './BasePage.module.css';

import Header from '../../components/Header/Header';
import ControlledCarousel from '../../components/Bootstrap/Carrossel/Carrossel'
import Atrativo from '../../components/Atrativo/Atrativo';

const IndexPage = () => {
  return (
    <>
        <Header />
        <div className={styles.containerMain}>
          <h3>TaskMaster</h3>
          <h4>Estamos aqui para aumentar a sua produtividade!</h4>
        </div>
        <ControlledCarousel />
        <Atrativo />
    </>
  )
}

export default IndexPage;
