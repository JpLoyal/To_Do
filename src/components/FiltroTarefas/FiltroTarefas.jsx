import styles from './FiltroTarefas.module.css'
import Select from 'react-select';

const FiltroTarefas = ({ setFiltroTarefas }) => {

  const opcoesFiltro = [
    { value: 'todas', label: 'Todas' },
    { value: 'pendente', label: 'Pendentes' },
    { value: 'concluida', label: 'Concluídas' }
  ];

  const handleChange = (opcaoSelecionada) => {
    setFiltroTarefas(opcaoSelecionada.value);
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
