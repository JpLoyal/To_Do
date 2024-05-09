import styles from './Tasks.module.css';
import { useState } from 'react';

import ReactModal from 'react-modal';


ReactModal.setAppElement('#root');

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
            <ul className={styles.ul}>
                {tasks.map((tarefa, index)=>{
                    return (
                        <li key={index}>
                            {index + 1} - {tarefa}
                            <span>
                                <button onClick={() => {
                                    abrirModalDeAtualizacao(index);
                                }}>
                                    U
                                </button>
                                <button onClick={() => {
                                    abrirModalDeExclusao(index)
                                }}>
                                    D
                                </button>
                            </span>
                        </li>
                    )
                })}
            </ul>

            {/* Modal de atualização de tarefa */}
            <ReactModal
                isOpen={modalAtualizarIsOpen}
                onRequestClose={fecharModalDeAtualizacao}
            >
                <h4>Tarefa a ser atualizada:</h4>
                <p>{tasks[indexDaTarefaASerAtualizada]}</p>

                <h4>Nova Tarefa:</h4>

                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    atualizarTarefa(indexDaTarefaASerAtualizada, tarefaAtualizadaNoInputDoModal);
                    setTarefaAtualizadaNoInputDoModal('');
                    setModalAtualizarIsOpen(false);                    
                }}>
                    <input
                        type='text'
                        value={tarefaAtualizadaNoInputDoModal}
                        onChange={(evento) => setTarefaAtualizadaNoInputDoModal(evento.target.value)}
                    />
                    <button type='submit'>Atualizar Tarefa</button>
                </form>

                <button onClick={fecharModalDeAtualizacao}>Fechar Modal</button>
            </ReactModal>

            {/* Modal de exclusão de tarefa */}
            <ReactModal
                isOpen={modalExcluirIsOpen}
                onRequestClose={fecharModalDeExclusao}
            >
                <h4>Tem certeza que deseja excluir a seguinte tarefa:</h4>
                <p>{tasks[indexDaTarefaASerExcluida]}</p>

                <button onClick={() => {
                    removerTarefa(indexDaTarefaASerExcluida);
                    setModalExcluirIsOpen(false);
                }}>
                    Excluir
                </button>

                <button onClick={fecharModalDeExclusao}>Fechar Modal</button>
            </ReactModal>
        </>
    )
}

export default Tasks;
