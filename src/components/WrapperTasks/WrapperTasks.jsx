import styles from './WrapperTasks.module.css';
import { useState } from 'react';
import Tasks from '../Tasks/Tasks';

import BotaoAdicionarTarefa from '../BotaoAdicionarTarefa/BotaoAdicionarTarefa';

const WrapperTasks = () => {
    const [tasks, setTasks] = useState(['Escovar os dentes', 'Tomar Café', 'Passar Creme']);
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
            
            <form onSubmit={(evento) => {
                evento.preventDefault();
                adicionarTarefa();
            }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(evento)=>setInputValue(evento.target.value)}
                />
                <BotaoAdicionarTarefa />
            </form>
        
            <Tasks
                tasks={tasks}
                atualizarTarefa={atualizarTarefa}
                removerTarefa={removerTarefa}
            />

        </section>
    )
}

export default WrapperTasks;