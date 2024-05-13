import ReactModal from 'react-modal';
import styles from './ModalExcluirTarefa.module.css'

const ModalExcluirTarefa = ({
    tasks,
    tarefasFiltradas,
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
                <h4 className={styles.tituloExcluir}>Tem certeza que deseja excluir a seguinte tarefa:</h4>

                {indexDaTarefaASerExcluida !== null && tarefasFiltradas[indexDaTarefaASerExcluida] && (
                    <p>{tarefasFiltradas[indexDaTarefaASerExcluida].descricao}</p>
                )}
                
                <button onClick={() => {
                    removerTarefa(indexDaTarefaASerExcluida, tarefasFiltradas[indexDaTarefaASerExcluida]);
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