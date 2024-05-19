import styles from './WrapperTasks.module.css';
import { useState } from 'react';
import Tasks from '../Tasks/Tasks';
import config from '../../config';

import ModalAdicionarTarefa from '../Modals/ModalAdicionarTarefa/ModalAdicionarTarefa';
import FiltroTarefas from '../FiltroTarefas/FiltroTarefas';


const WrapperTasks = () => {
    const [tasks, setTasks] = useState([]);

    const [descricaoNovaTarefa, setDescricaoNovaTarefa] = useState('');
    const [dataNovaTarefa, setDataNovaTarefa] = useState('');
    const [horarioNovaTarefa, setHorarioNovaTarefa] = useState('');

    const [modalAdicionarIsOpen, setModalAdicionarIsOpen] = useState(false);

    const [filtroTarefas, setFiltroTarefas] = useState('pendente');
 
    async function adicionarTarefa() {
        const novaTarefa = {
            descricao: descricaoNovaTarefa,
            data: dataNovaTarefa,
            horario: horarioNovaTarefa,
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

            setTasks((prevTasks) => [...prevTasks, novaTarefa]);

            setDescricaoNovaTarefa('');
            setDataNovaTarefa('');
            setHorarioNovaTarefa('');

            console.log('Sucesso ao criar a seguinte tarefa:', data)

        } catch (error) {
            console.error('Erro ao adicionar a tarefa:', error);
        }
    }

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
                setDataNovaTarefa={setDataNovaTarefa}
                setHorarioNovaTarefa={setHorarioNovaTarefa}
            />
        
            <Tasks
                tasks={tasks}
                setTasks={setTasks}
                filtroTarefas={filtroTarefas}
            />

        </section>
    )
}

export default WrapperTasks;