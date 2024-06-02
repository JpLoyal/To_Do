import React from 'react';
import styles from './BasePage.module.css';

import Header from '../../components/Header/Header';

const IndexPage = () => {
  return (
    <>
        <Header />
        <div className={styles.containerMain}>
            Essa é a página index
        </div>
    </>
  )
}

export default IndexPage;
