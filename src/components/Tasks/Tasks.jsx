import styles from './Tasks.module.css';
import { useState } from 'react';

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
                                        onClick={() => {
                                            const tarefaConcluida = tarefa
                                            const todasAsTarefas = [...tasks];
                                            todasAsTarefas.forEach((tarefa) => {
                                                if (tarefa.id === tarefaConcluida.id) {
                                                    tarefa.status = 'concluida';
                                                    setTasks(todasAsTarefas);
                                                }
                                            })

                                        }}
                                        className={styles.botaoConcluirTarefa}
                                    >
                                        Marcar como concluída
                                    </button>
                                )}

                                {tarefa.status === 'concluida' && (
                                    <button
                                        className={styles.botaoConcluirTarefa}
                                        onClick={() => {
                                            const tarefaDesconcluida = tarefa
                                            const todasAsTarefas = [...tasks];
                                            todasAsTarefas.forEach((tarefa) => {
                                                if (tarefa.id === tarefaDesconcluida.id) {
                                                    tarefa.status = 'pendente';
                                                    setTasks(todasAsTarefas);
                                                }
                                            })

                                        }}                                        
                                    >
                                        
                                        Desmarcar como concluída
                                    </button>
                                )}
                                <button className={styles.botoesAttDel} onClick={() => {
                                    console.log(index)
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
