import styles from './Tasks.module.css';
import { useState } from 'react';

import ModalAtualizarTarefa from '../Modals/ModalAtualizarTarefa/ModalAtualizarTarefa';
import ModalExcluirTarefa from '../Modals/ModalExcluirTarefa/ModalExcluirTarefa';

import { FaPenAlt, FaTrash, FaClock, FaCalendar } from "react-icons/fa";

const Tasks = ({ tasks, atualizarTarefa, removerTarefa, filtroTarefas }) => {

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

    const tarefasFiltradas = tasks.filter(tarefa => {
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
                            <div>
                                <div>
                                    {index + 1} - {tarefa.descricao}
                                </div>
                                <div className={styles.containerDataHorario}>
                                    <span className={styles.spanDataHorario}> <FaClock /> {tarefa.horario}</span>
                                    <span className={styles.spanDataHorario}> <FaCalendar /> {tarefa.data}</span>
                                </div>
                            </div>
                            <span className={styles.spanBotoesAttDel}>
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
