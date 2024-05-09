import ReactModal from 'react-modal';

const ModalAtualizarTarefa = ({
    tasks,
    atualizarTarefa,
    modalAtualizarIsOpen,
    fecharModalDeAtualizacao,
    indexDaTarefaASerAtualizada,
    tarefaAtualizadaNoInputDoModal,
    setTarefaAtualizadaNoInputDoModal,
    setModalAtualizarIsOpen
}) => {
    return (
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
    )
}

export default ModalAtualizarTarefa;