import styles from './WrapperTasks.module.css';
import { useState } from 'react';
import Tasks from '../Tasks/Tasks';
import { v4 as uuidv4 } from 'uuid';
import config from '../../config';

import ModalAdicionarTarefa from '../Modals/ModalAdicionarTarefa/ModalAdicionarTarefa';
import FiltroTarefas from '../FiltroTarefas/FiltroTarefas';
import tarefas from '../../data/tarefas';

const WrapperTasks = () => {
    const [tasks, setTasks] = useState([]);

    const [descricaoNovaTarefa, setDescricaoNovaTarefa] = useState('');
    const [dataNovaTarefa, setDataNovaTarefa] = useState('');
    const [horarioNovaTarefa, setHorarioNovaTarefa] = useState('');
    const [statusNovaTarefa, setStatusNovaTarefa] = useState('pendente');

    const [modalAdicionarIsOpen, setModalAdicionarIsOpen] = useState(false);

    const [filtroTarefas, setFiltroTarefas] = useState('pendente');
 
    async function adicionarTarefa() {
        const novaTarefa = {
            id: uuidv4(),
            descricao: descricaoNovaTarefa,
            data: dataNovaTarefa,
            horario: horarioNovaTarefa,
            status: statusNovaTarefa,
        };
    
        try {
            const response = await fetch(`${config.API_URL}/tarefas/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novaTarefa),
            });
    
            if (!response.ok) {
                throw new Error('Erro ao adicionar a tarefa');
            }
    
            const data = await response.json();
            console.log('Tarefa adicionada com sucesso:', data);

            setTasks((prevTasks) => [...prevTasks, novaTarefa]);

            setDescricaoNovaTarefa('');
            setDataNovaTarefa('');
            setHorarioNovaTarefa('');
            setStatusNovaTarefa('');

        } catch (error) {
            console.error('Erro ao adicionar a tarefa:', error);
        }
    }
    

    async function removerTarefa(index, tarefaASerExcluida){
        const novasTarefas = [...tasks];

        novasTarefas.forEach((tarefa, index)=>{
            if (tarefa.id === tarefaASerExcluida.id) {
            novasTarefas.splice(index, 1)
            }
        })

        try {
            await fetch(`${config.API_URL}/tarefas/${tarefaASerExcluida.id}/`, {
                method: 'DELETE',
            });
            setTasks(novasTarefas);
            
        } catch (error) {
            console.error('Erro ao excluir a tarefa:', error);
        }

    };

    async function atualizarTarefa(index, tarefaAtualizada){
        const novasTarefas = [...tasks];

        console.log(tarefaAtualizada)

        novasTarefas.forEach((tarefa, i)=>{
            if (tarefa.id === tarefaAtualizada.id) {
                novasTarefas[i] = tarefaAtualizada
            } 
        })

        const idDaTarefaAtualizada = tarefaAtualizada.id;
        console.log('ID da tarefa que vai ser atualizada:', idDaTarefaAtualizada);


        
        // O erro acontece a partir daqui

        try {
            const response = await fetch(`${config.API_URL}/tarefas/${idDaTarefaAtualizada}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tarefaAtualizada),
            });
        
            if (!response.ok) {
                throw new Error('Erro ao atualizar a tarefa');
            }
        
            const data = await response.json();
            console.log('Tarefa atualizada com sucesso:', data);
            setTasks(novasTarefas)

        } catch (error) {
            console.error('Erro ao atualizar a tarefa:', error);
        }
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