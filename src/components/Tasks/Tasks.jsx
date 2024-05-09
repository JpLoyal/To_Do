import styles from './Tasks.module.css';
import { useState } from 'react';

import ModalAtualizarTarefa from '../Modals/ModalAtualizarTarefa/ModalAtualizarTarefa';
import ModalExcluirTarefa from '../Modals/ModalExcluirTarefa/ModalExcluirTarefa';

import { FaPenAlt, FaTrash } from "react-icons/fa";

const Tasks = ({ tasks, atualizarTarefa, removerTarefa }) => {

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

    return (
        <>
            <ul className={styles.listaTarefas}>
                {tasks.map((tarefa, index)=>{
                    return (
                        <li key={index} className={styles.elementoListaTarefas}>
                            <div>
                                {index + 1} - {tarefa}
                            </div>
                            <span className={styles.spanBotoesAttDel}>
                                <button onClick={() => {
                                    abrirModalDeAtualizacao(index);
                                }}>
                                    <FaPenAlt />
                                </button>
                                <button onClick={() => {
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
