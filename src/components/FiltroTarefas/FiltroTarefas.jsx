import styles from './FiltroTarefas.module.css'
import React, { useState } from 'react';
import Select from 'react-select';

const FiltroTarefas = () => {
  const [filtro, setFiltro] = useState(null);

  const opcoesFiltro = [
    { value: 'todas', label: 'Todas' },
    { value: 'pendentes', label: 'Pendentes' },
    { value: 'concluidas', label: 'Concluídas' }
  ];

  const handleChange = (opcaoSelecionada) => {
    setFiltro(opcaoSelecionada.value);
  };

  return (
    <div className={styles.DropdownFiltrar}>
      <Select
        options={opcoesFiltro}
        onChange={handleChange}
        placeholder={"Filtrar"}
      />
    </div>
  );
};

export default FiltroTarefas;
