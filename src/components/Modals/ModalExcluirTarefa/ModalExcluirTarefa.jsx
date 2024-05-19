import ReactModal from 'react-modal';
import styles from './ModalExcluirTarefa.module.css'

const ModalExcluirTarefa = ({
    modalExcluirIsOpen,
    fecharModalDeExclusao,
}) => {
    return (
        <ReactModal
                isOpen={modalExcluirIsOpen}
                onRequestClose={fecharModalDeExclusao}
                className={'estilosModals'}
        >
            <section className={styles.containerModalExcluir}>
                <h4 className={styles.tituloExcluir}>Tem certeza que deseja excluir a seguinte tarefa:</h4>
                
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