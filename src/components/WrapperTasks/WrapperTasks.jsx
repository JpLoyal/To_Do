import styles from './WrapperTasks.module.css';
import { useState } from 'react';
import Tasks from '../Tasks/Tasks';

const WrapperTasks = () => {
    const [tasks, setTasks] = useState(['Escovar os dentes', 'Tomar café', 'Passar Creme']);
    const [inputValue, setInputValue] = useState('');
 
    function adicionarTarefa(){
        setTasks([...tasks, inputValue]);
        setInputValue('');
    };

    function removerTarefa(index){
        const novasTarefas = [...tasks];
        novasTarefas.splice(index, 1);
        setTasks(novasTarefas);
    };

    function atualizarTarefa(index, tarefaAtualizada){
        const novasTarefas = [...tasks];
        novasTarefas[index] = tarefaAtualizada
        setTasks(novasTarefas)
    };

    return (
        <section className={styles.containerTasks}>
            <h1 className={styles.tituloTarefa}>Tarefas</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(evento)=>setInputValue(evento.target.value)}
            />
            <button onClick={() => adicionarTarefa()}>Adicionar Tarefa</button>

            <Tasks
                tasks={tasks}
                atualizarTarefa={atualizarTarefa}
                removerTarefa={removerTarefa}
            />

        </section>
    )
}

export default WrapperTasks;