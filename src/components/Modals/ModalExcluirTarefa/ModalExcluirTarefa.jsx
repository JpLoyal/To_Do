import ReactModal from 'react-modal';
import styles from './ModalExcluirTarefa.module.css'

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
                className={'estilosModals'}
        >
            <section className={styles.containerModalExcluir}>
                <h4>Tem certeza que deseja excluir a seguinte tarefa:</h4>

                {indexDaTarefaASerExcluida !== null && tasks[indexDaTarefaASerExcluida] && (
                    <p>{tasks[indexDaTarefaASerExcluida].descricao}</p>
                )}
                
                <button onClick={() => {
                    removerTarefa(indexDaTarefaASerExcluida);
                    setModalExcluirIsOpen(false);
                }}>
                    Excluir
                </button>

                <button onClick={fecharModalDeExclusao}>Cancelar</button>
            </section>
        </ReactModal>
    )
}

export default ModalExcluirTarefa;