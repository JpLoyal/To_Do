import styles from './Tasks.module.css';
import { useEffect, useState } from 'react';
import config from '../../config';

import ModalAtualizarTarefa from '../Modals/ModalAtualizarTarefa/ModalAtualizarTarefa';
import ModalExcluirTarefa from '../Modals/ModalExcluirTarefa/ModalExcluirTarefa';

import { FaPenAlt, FaTrash, FaClock, FaCalendar } from "react-icons/fa";


const Tasks = ({ tasks, setTasks, atualizarTarefa, removerTarefa, filtroTarefas }) => {

    const [modalAtualizarIsOpen, setModalAtualizarIsOpen] = useState(false);
    const [indexDaTarefaASerAtualizada, setIndexDaTarefaASerAtualizada] = useState(null);
    const [tarefaAtualizadaNoInputDoModal, setTarefaAtualizadaNoInputDoModal] = useState('');

    const [modalExcluirIsOpen, setModalExcluirIsOpen] = useState(false);
    const [indexDaTarefaASerExcluida, setIndexDaTarefaASerExcluida] = useState(null);

    function fecharModalDeAtualizacao(){
        setModalAtualizarIsOpen(false);
    };

    function abrirModalDeAtualizacao(index){
        setIndexDaTarefaASerAtualizada(index);
        setModalAtualizarIsOpen(true);
    };

    function fecharModalDeExclusao(){
        setModalExcluirIsOpen(false);
    };

    function abrirModalDeExclusao(index){
        setIndexDaTarefaASerExcluida(index);
        setModalExcluirIsOpen(true);
    };

    const marcarComoConcluida = async (tarefa) => {
        try {
            const response = await fetch(`${config.API_URL}/tarefas/${tarefa.id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: 'concluida' }),
            });
            if (!response.ok) {
                throw new Error('Erro ao marcar a tarefa como concluída');
            }
            const todasAsTarefas = tasks.map(t =>
                t.id === tarefa.id ? { ...t, status: 'concluida' } : t
            );
            setTasks(todasAsTarefas);
        } catch (error) {
            console.error('Erro ao marcar a tarefa como concluída:', error);
        }
    }

    const desmarcarComoConcluida = (tarefaDesconcluida) => {
        const todasAsTarefas = [...tasks];
        todasAsTarefas.forEach((tarefa) => {
            if (tarefa.id === tarefaDesconcluida.id) {
                tarefa.status = 'pendente';
                setTasks(todasAsTarefas);
    
                fetch(`${config.API_URL}/tarefas/${tarefaDesconcluida.id}/`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status: 'pendente' }),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao atualizar o status da tarefa');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Status da tarefa atualizado para pendente:', data);
                })
                .catch(error => {
                    console.error('Erro ao atualizar o status da tarefa:', error);
                });
            }
        });
    };

    useEffect(()=>{
        const fetchTarefas = async () => {
            try {
                const response = await fetch(`${config.API_URL}/tarefas/`);
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
            }
        }
        fetchTarefas();
    }, []);

    const tarefasOrdenadas = tasks.slice().sort((a, b) => {
        const dataHoraA = new Date(`${a.data}T${a.horario}`);
        const dataHoraB = new Date(`${b.data}T${b.horario}`);
        return dataHoraA - dataHoraB;
    });

    const tarefasFiltradas = tarefasOrdenadas.filter(tarefa => {
        if (filtroTarefas === 'todas') {
            return true; // Retorna todas as tarefas
        } else if (filtroTarefas === 'pendente') {
            return tarefa.status === 'pendente'; // Retorna apenas as tarefas pendentes
        } else if (filtroTarefas === 'concluida') {
            return tarefa.status === 'concluida'; // Retorna apenas as tarefas concluídas
        }
    });

    return (
        <>
            <ul className={styles.listaTarefas}>
                {tarefasFiltradas.map((tarefa, index)=>{
                    return (
                        <li key={index} className={styles.elementoListaTarefas}>
                            <div className={styles.containerTarefaDataHorario}>
                                <div className={styles.containerIndexDescricao}>
                                    {index + 1} - {tarefa.descricao}
                                </div>
                                <div className={styles.containerDataHorario}>
                                    <span className={styles.spanDataHorario}> <FaClock /> {tarefa.horario}</span>
                                    <span className={styles.spanDataHorario}> <FaCalendar /> {tarefa.data}</span>
                                </div>
                            </div>
                            <span className={styles.spanBotoesAttDel}>
                                {tarefa.status === 'pendente' && (
                                    <button
                                        onClick={() => marcarComoConcluida(tarefa)}
                                        className={styles.botaoConcluirTarefa}
                                    >
                                        Marcar como concluída
                                    </button>
                                )}

                                {tarefa.status === 'concluida' && (
                                    <button
                                        className={styles.botaoConcluirTarefa}
                                        onClick={() => desmarcarComoConcluida(tarefa)}                                 
                                    >
                                        
                                        Desmarcar como concluída
                                    </button>
                                )}
                                <button className={styles.botoesAttDel} onClick={() => {
                                    abrirModalDeAtualizacao(index);
                                }}>
                                    <FaPenAlt />
                                </button>
                                <button className={`${styles.botoesAttDel} ${styles.botaoDel}`} onClick={() => {
                                    abrirModalDeExclusao(index)
                                }}>
                                    <FaTrash />
                                </button>
                            </span>
                        </li>
                    )
                })}
            </ul>

            <ModalAtualizarTarefa 
                tasks={tasks}
                tarefasFiltradas={tarefasFiltradas}
                atualizarTarefa={atualizarTarefa}
                modalAtualizarIsOpen={modalAtualizarIsOpen}
                fecharModalDeAtualizacao={fecharModalDeAtualizacao}
                indexDaTarefaASerAtualizada={indexDaTarefaASerAtualizada}
                tarefaAtualizadaNoInputDoModal={tarefaAtualizadaNoInputDoModal}
                setTarefaAtualizadaNoInputDoModal={setTarefaAtualizadaNoInputDoModal}
                setModalAtualizarIsOpen={setModalAtualizarIsOpen}
            />

            <ModalExcluirTarefa
                tasks={tasks}
                tarefasFiltradas={tarefasFiltradas}
                modalExcluirIsOpen={modalExcluirIsOpen}
                fecharModalDeExclusao={fecharModalDeExclusao}
                removerTarefa={removerTarefa}
                indexDaTarefaASerExcluida={indexDaTarefaASerExcluida}
                setModalExcluirIsOpen={setModalExcluirIsOpen}
            />
        </>
    )
}

export default Tasks;
