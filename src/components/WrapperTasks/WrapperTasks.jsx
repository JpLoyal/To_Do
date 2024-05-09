import styles from './WrapperTasks.module.css';
import { useState } from 'react';
import Tasks from '../Tasks/Tasks';

import ModalAdicionarTarefa from '../Modals/ModalAdicionarTarefa/ModalAdicionarTarefa';
import tarefas from '../../data/tarefas'

const WrapperTasks = () => {
    const [tasks, setTasks] = useState(tarefas);

    const [idNovaTarefa, setIdNovaTarefa] = useState('');
    const [descricaoNovaTarefa, setDescricaoNovaTarefa] = useState('');
    const [dataNovaTarefa, setDataNovaTarefa] = useState('');
    const [horarioNovaTarefa, setHorarioNovaTarefa] = useState('');
    const [statusNovaTarefa, setStatusNovaTarefa] = useState('pendente');

    const [modalAdicionarIsOpen, setModalAdicionarIsOpen] = useState(false);
 
    function adicionarTarefa(){
        const novaTarefa = {
            id: idNovaTarefa,
            descricao: descricaoNovaTarefa,
            data: dataNovaTarefa,
            horario: horarioNovaTarefa,
            status: statusNovaTarefa,
        }
        setTasks([...tasks, novaTarefa]);
        setIdNovaTarefa('');
        setDescricaoNovaTarefa('');
        setDataNovaTarefa('');
        setHorarioNovaTarefa('');
        setStatusNovaTarefa('');
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

    function abrirModalDeCriacao(){
        setModalAdicionarIsOpen(true);
    }

    function fecharModalDeCriacao(){
        setModalAdicionarIsOpen(false);
    }

    return (
        <section className={styles.containerTasks}>
            <h1 className={styles.tituloTarefa}>Tarefas</h1>
        
            <button onClick={abrirModalDeCriacao}>Adicionar tarefa</button>

            <ModalAdicionarTarefa 
                modalAdicionarIsOpen={modalAdicionarIsOpen}
                fecharModalDeCriacao={fecharModalDeCriacao}
                adicionarTarefa={adicionarTarefa}
                idNovaTarefa={idNovaTarefa}
                setIdNovaTarefa={setIdNovaTarefa}
                descricaoNovaTarefa={descricaoNovaTarefa}
                setDescricaoNovaTarefa={setDescricaoNovaTarefa}
                dataNovaTarefa={dataNovaTarefa}
                setDataNovaTarefa={setDataNovaTarefa}
                horarioNovaTarefa={horarioNovaTarefa}
                setHorarioNovaTarefa={setHorarioNovaTarefa}
                statusNovaTarefa={statusNovaTarefa}
                setStatusNovaTarefa={setStatusNovaTarefa}
            />
        
            <Tasks
                tasks={tasks}
                atualizarTarefa={atualizarTarefa}
                removerTarefa={removerTarefa}
            />

        </section>
    )
}

export default WrapperTasks;