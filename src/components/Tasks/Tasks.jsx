import styles from './Tasks.module.css';
import { useState } from 'react';

import ReactModal from 'react-modal';


ReactModal.setAppElement('#root');

const Tasks = ({ tasks, atualizarTarefa, removerTarefa }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [indexDaTarefaASerAtualizada, setIndexDaTarefaASerAtualizada] = useState(null);
    const [tarefaAtualizadaNoInputDoModal, setTarefaAtualizadaNoInputDoModal] = useState('');

    function fecharModal(){
        setModalIsOpen(false);
    };

    function abrirModal(index){
        setIndexDaTarefaASerAtualizada(index);
        setModalIsOpen(true);
    };

    return (
        <>
            <ul className={styles.ul}>
                {tasks.map((tarefa, index)=>{
                    return (
                    <li key={index}>
                        {index + 1} - {tarefa}
                        <span>
                            <button onClick={() => {
                                abrirModal(index);
                            }}>
                                U
                            </button>
                            <button onClick={() => removerTarefa(index)}>D</button>
                        </span>
                    </li>
                    )
                })}
            </ul>

            {/* Modal de atualização de tarefa */}
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => fecharModal()}
            >
                <h4>Tarefa Atual:</h4>
                <p>{tasks[indexDaTarefaASerAtualizada]}</p>

                <h4>Nova Tarefa:</h4>
                <input
                    type='text'
                    value={tarefaAtualizadaNoInputDoModal}
                    onChange={(evento) => setTarefaAtualizadaNoInputDoModal(evento.target.value)}
                />

                <button onClick={() => {
                            atualizarTarefa(indexDaTarefaASerAtualizada, tarefaAtualizadaNoInputDoModal);
                            setTarefaAtualizadaNoInputDoModal('');
                            setModalIsOpen(false);
                        }}
                >
                    Atualizar Tarefa
                </button>

                <button onClick={() => fecharModal()}>Fechar Modal</button>

            </ReactModal>
        </>
    )
}

export default Tasks;
