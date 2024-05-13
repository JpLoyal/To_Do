import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import styles from './ModalAtualizarTarefa.module.css';

const ModalAtualizarTarefa = ({
    tasks,
    tarefasFiltradas,
    atualizarTarefa,
    modalAtualizarIsOpen,
    fecharModalDeAtualizacao,
    indexDaTarefaASerAtualizada,
    tarefaAtualizadaNoInputDoModal,
    setTarefaAtualizadaNoInputDoModal,
    setModalAtualizarIsOpen
}) => {

    const [idAtualizacaoTarefa, setIdAtualizacaoTarefa] = useState('');
    const [descricaoAtualizacaoTarefa, setDescricaoAtualizacaoTarefa] = useState('');
    const [dataAtualizacaoTarefa, setDataAtualizacaoTarefa] = useState('');
    const [horarioAtualizacaoTarefa, setHorarioAtualizacaoTarefa] = useState('');
    const [statusAtualizacaoTarefa, setStatusAtualizacaoTarefa] = useState('');

    useEffect(() => {
        if (indexDaTarefaASerAtualizada !== null) {
            setIdAtualizacaoTarefa(tarefasFiltradas[indexDaTarefaASerAtualizada].id)
            setDescricaoAtualizacaoTarefa(tarefasFiltradas[indexDaTarefaASerAtualizada].descricao);
            setDataAtualizacaoTarefa(tarefasFiltradas[indexDaTarefaASerAtualizada].data);
            setHorarioAtualizacaoTarefa(tarefasFiltradas[indexDaTarefaASerAtualizada].horario);
            setStatusAtualizacaoTarefa(tarefasFiltradas[indexDaTarefaASerAtualizada].status);
        }
    }, [indexDaTarefaASerAtualizada, tasks]);

    return (
        <ReactModal
            isOpen={modalAtualizarIsOpen}
            onRequestClose={fecharModalDeAtualizacao}
            className={'estilosModals'}
        >
            <section className={styles.containerModalAtualizar}>
                <h4>Tarefa a ser atualizada:</h4>
                
                {indexDaTarefaASerAtualizada !== null && (
                    <p>{tarefasFiltradas[indexDaTarefaASerAtualizada].descricao}</p>
                )}

                <h4>Nova Tarefa:</h4>

                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    atualizarTarefa(indexDaTarefaASerAtualizada, tarefaAtualizadaNoInputDoModal);
                    setTarefaAtualizadaNoInputDoModal('');
                    setModalAtualizarIsOpen(false);
                    
                    const objTarefaAtualizada = {
                        id: idAtualizacaoTarefa,
                        descricao: descricaoAtualizacaoTarefa,
                        data: dataAtualizacaoTarefa,
                        horario: horarioAtualizacaoTarefa,
                        status: statusAtualizacaoTarefa,
                    }
                    atualizarTarefa(indexDaTarefaASerAtualizada, objTarefaAtualizada)
                    
                }}>
                    <input
                        type='text'
                        value={descricaoAtualizacaoTarefa}
                        onChange={(evento) => setDescricaoAtualizacaoTarefa(evento.target.value)}
                        required
                    />

                    <input
                        type="date"
                        value={dataAtualizacaoTarefa}
                        onChange={(evento) => setDataAtualizacaoTarefa(evento.target.value)}
                        required
                    />

                    <input
                        type='time'
                        value={horarioAtualizacaoTarefa}
                        onChange={(evento) => setHorarioAtualizacaoTarefa(evento.target.value)}
                        required
                    />

                    <button type='submit'>Atualizar Tarefa</button>
                    <button type='button' onClick={fecharModalDeAtualizacao}>Cancelar</button>
                </form>
            </section>
        </ReactModal>
    )
}

export default ModalAtualizarTarefa;