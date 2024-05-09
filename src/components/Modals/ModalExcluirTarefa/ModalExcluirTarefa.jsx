import ReactModal from 'react-modal';

const ModalExcluirTarefa = ({
    tasks,
    modalExcluirIsOpen,
    fecharModalDeExclusao,
    removerTarefa,
    indexDaTarefaASerExcluida,
    setModalExcluirIsOpen
}) => {
    return (
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
    )
}

export default ModalExcluirTarefa;