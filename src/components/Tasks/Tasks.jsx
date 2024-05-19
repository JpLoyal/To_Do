import styles from './Tasks.module.css';
import { useEffect, useState } from 'react';
import config from '../../config';

import ModalAtualizarTarefa from '../Modals/ModalAtualizarTarefa/ModalAtualizarTarefa';
import ModalExcluirTarefa from '../Modals/ModalExcluirTarefa/ModalExcluirTarefa';

import { FaPenAlt, FaTrash, FaClock, FaCalendar } from "react-icons/fa";


const Tasks = ({ tasks, setTasks, atualizarTarefa, removerTarefa, filtroTarefas }) => {

    const [modalAtualizarIsOpen, setModalAtualizarIsOpen] = useState(false);
    const [tarefaASerAtualizada, setTarefaASerAtualizada] = useState(null)

    const [modalExcluirIsOpen, setModalExcluirIsOpen] = useState(false);
    const [tarefaASerExcluida, setTarefaASerExcluida] = useState(null);

    function fecharModalDeAtualizacao(){
        setModalAtualizarIsOpen(false);
    };

    function abrirModalDeAtualizacao(tarefa){
        setModalAtualizarIsOpen(true);
    };

    function fecharModalDeExclusao(){
        setModalExcluirIsOpen(false);
    };

    function abrirModalDeExclusao(tarefa){
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
                                    setTarefaASerAtualizada(tarefa);
                                    abrirModalDeAtualizacao(tarefa);
                                }}>
                                    <FaPenAlt />
                                </button>
                                <button className={`${styles.botoesAttDel} ${styles.botaoDel}`} onClick={() => {
                                    abrirModalDeExclusao(tarefa);
                                    setTarefaASerExcluida(tarefa)
                                }}>
                                    <FaTrash />
                                </button>
                            </span>
                        </li>
                    )
                })}
            </ul>

            <ModalAtualizarTarefa 
                modalAtualizarIsOpen={modalAtualizarIsOpen}
                fecharModalDeAtualizacao={fecharModalDeAtualizacao}
                tarefaASerAtualizada={tarefaASerAtualizada}
            />

            <ModalExcluirTarefa
                modalExcluirIsOpen={modalExcluirIsOpen}
                fecharModalDeExclusao={fecharModalDeExclusao}
                tarefaASerExcluida={tarefaASerExcluida}
            />
        </>
    )
}

export default Tasks;
