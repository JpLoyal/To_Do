import ReactModal from 'react-modal';
import styles from './ModalExcluirTarefa.module.css';
import config from '../../../config';

const ModalExcluirTarefa = ({
    tasks,
    setTasks,
    modalExcluirIsOpen,
    fecharModalDeExclusao,
    tarefaASerExcluida
}) => {

    const removerTarefa = async (tarefaASerExcluida) => {
        const novasTarefas = [...tasks];

        novasTarefas.forEach((tarefa, index)=>{
            if (tarefa.id === tarefaASerExcluida.id) {
            novasTarefas.splice(index, 1)
            }
        })

        try {
            await fetch(`${config.API_URL}/tarefas/${tarefaASerExcluida.id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Inclui o token de autenticação no cabeçalho
                },
            });
            setTasks(novasTarefas);
            
        } catch (error) {
            console.error('Erro ao excluir a tarefa:', error);
        }
    };

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
                    removerTarefa(tarefaASerExcluida)
                    fecharModalDeExclusao()
                }}>
                    Excluir
                </button>

                <button onClick={fecharModalDeExclusao}>Cancelar</button>
            </section>
        </ReactModal>
    )
}

export default ModalExcluirTarefa;