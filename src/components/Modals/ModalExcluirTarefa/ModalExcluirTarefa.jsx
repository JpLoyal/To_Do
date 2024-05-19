import ReactModal from 'react-modal';
import styles from './ModalExcluirTarefa.module.css'

const ModalExcluirTarefa = ({
    modalExcluirIsOpen,
    fecharModalDeExclusao,
    tarefaASerExcluida
}) => {
    return (
        <ReactModal
                isOpen={modalExcluirIsOpen}
                onRequestClose={fecharModalDeExclusao}
                className={'estilosModals'}
        >
            <section className={styles.containerModalExcluir}>
                <h4 className={styles.tituloExcluir}>Tem certeza que deseja excluir a seguinte tarefa:</h4>
                
                <p>{tarefaASerExcluida !== null && tarefaASerExcluida.descricao}</p>

                <button onClick={() => {
            
                }}>
                    Excluir
                </button>

                <button onClick={fecharModalDeExclusao}>Cancelar</button>
            </section>
        </ReactModal>
    )
}

export default ModalExcluirTarefa;