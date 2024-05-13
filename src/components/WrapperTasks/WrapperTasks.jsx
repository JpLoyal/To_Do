import styles from './WrapperTasks.module.css';
import { useState } from 'react';
import Tasks from '../Tasks/Tasks';
import { v4 as uuidv4 } from 'uuid'

import ModalAdicionarTarefa from '../Modals/ModalAdicionarTarefa/ModalAdicionarTarefa';
import FiltroTarefas from '../FiltroTarefas/FiltroTarefas';
import tarefas from '../../data/tarefas';

const WrapperTasks = () => {
    const [tasks, setTasks] = useState(tarefas);

    const [descricaoNovaTarefa, setDescricaoNovaTarefa] = useState('');
    const [dataNovaTarefa, setDataNovaTarefa] = useState('');
    const [horarioNovaTarefa, setHorarioNovaTarefa] = useState('');
    const [statusNovaTarefa, setStatusNovaTarefa] = useState('pendente');

    const [modalAdicionarIsOpen, setModalAdicionarIsOpen] = useState(false);

    const [filtroTarefas, setFiltroTarefas] = useState('pendente');
 
    function adicionarTarefa(){
        const novaTarefa = {
            id: uuidv4(),
            descricao: descricaoNovaTarefa,
            data: dataNovaTarefa,
            horario: horarioNovaTarefa,
            status: statusNovaTarefa,
        }
        setTasks([...tasks, novaTarefa]);
        setDescricaoNovaTarefa('');
        setDataNovaTarefa('');
        setHorarioNovaTarefa('');
        setStatusNovaTarefa('');
    };

    function removerTarefa(index, tarefaASerExcluida){
        const novasTarefas = [...tasks];

        novasTarefas.forEach((tarefa, index)=>{
            if (tarefa.id === tarefaASerExcluida.id) {
            novasTarefas.splice(index, 1)
            }
        })

        // novasTarefas.splice(index, 1);
        setTasks(novasTarefas);
    };

    function atualizarTarefa(index, tarefaAtualizada){
        const novasTarefas = [...tasks];

        novasTarefas.forEach((tarefa, index)=>{
            console.log(tarefa.id === tarefaAtualizada.id)
            if (tarefa.id === tarefaAtualizada.id) {
                novasTarefas[index] = tarefaAtualizada
            } 
        })
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

            <div className={styles.containerAddFiltrar}>
                <button onClick={abrirModalDeCriacao}>Adicionar tarefa</button>
                <FiltroTarefas
                    filtroTarefas={filtroTarefas}
                    setFiltroTarefas={setFiltroTarefas}
                />
            </div>

            <ModalAdicionarTarefa 
                modalAdicionarIsOpen={modalAdicionarIsOpen}
                fecharModalDeCriacao={fecharModalDeCriacao}
                adicionarTarefa={adicionarTarefa}
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
                setTasks={setTasks}
                atualizarTarefa={atualizarTarefa}
                removerTarefa={removerTarefa}
                filtroTarefas={filtroTarefas}
            />

        </section>
    )
}

export default WrapperTasks;