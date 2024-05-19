import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import styles from './ModalAtualizarTarefa.module.css';

const ModalAtualizarTarefa = ({
    modalAtualizarIsOpen,
    fecharModalDeAtualizacao,
    tarefaASerAtualizada
}) => {

    const [descricaoNoModalDeAtualizacao, setDescricaoNoModalDeAtualizacao] = useState('');
    const [dataNoModalDeAtualizacao, setDataNoModalDeAtualizacao] = useState('');
    const [horarioNoModalDeAtualizacao, setHorarioNoModalDeAtualizacao] = useState('');
    
    useEffect(() => {
        if (tarefaASerAtualizada) {
            setDescricaoNoModalDeAtualizacao(tarefaASerAtualizada.descricao);
            setDataNoModalDeAtualizacao(tarefaASerAtualizada.data);
            setHorarioNoModalDeAtualizacao(tarefaASerAtualizada.horario);
        }
    }, [tarefaASerAtualizada]);

    return (
        <ReactModal
            isOpen={modalAtualizarIsOpen}
            onRequestClose={fecharModalDeAtualizacao}
            className={'estilosModals'}
        >
            <section className={styles.containerModalAtualizar}>
                <h4>Tarefa a ser atualizada:</h4>

                <p>{tarefaASerAtualizada !== null && tarefaASerAtualizada.descricao}</p>

                <h4>Nova Tarefa:</h4>

                <form>
                    <input
                        type='text'
                        value={descricaoNoModalDeAtualizacao}
                        onChange={(evento) => {
                            setDescricaoNoModalDeAtualizacao(evento.target.value);
                        }}
                        required
                    />

                    <input
                        type="date"
                        value={dataNoModalDeAtualizacao}
                        onChange={(evento) => {
                            setDataNoModalDeAtualizacao(evento.target.value);
                        }}
                        required
                    />

                    <input
                        type='time'
                        value={horarioNoModalDeAtualizacao}
                        onChange={(evento) => {
                            setHorarioNoModalDeAtualizacao(evento.target.value);
                        }}
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