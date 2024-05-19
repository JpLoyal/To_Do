import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import styles from './ModalAtualizarTarefa.module.css';

const ModalAtualizarTarefa = ({
    modalAtualizarIsOpen,
    fecharModalDeAtualizacao,
    tarefaASerAtualizada
}) => {


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
                        value={tarefaASerAtualizada !== null && tarefaASerAtualizada.descricao}
                        // onChange={}
                        required
                    />

                    <input
                        type="date"
                        value={tarefaASerAtualizada !== null && tarefaASerAtualizada.data}
                        // onChange={(evento) => setDataAtualizacaoTarefa(evento.target.value)}
                        required
                    />

                    <input
                        type='time'
                        value={tarefaASerAtualizada !== null && tarefaASerAtualizada.horario}
                        // onChange={(evento) => setHorarioAtualizacaoTarefa(evento.target.value)}
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