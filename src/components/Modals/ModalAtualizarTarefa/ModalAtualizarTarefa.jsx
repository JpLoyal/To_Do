import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import styles from './ModalAtualizarTarefa.module.css';

const ModalAtualizarTarefa = ({
    modalAtualizarIsOpen,
    fecharModalDeAtualizacao,
}) => {


    return (
        <ReactModal
            isOpen={modalAtualizarIsOpen}
            onRequestClose={fecharModalDeAtualizacao}
            className={'estilosModals'}
        >
            <section className={styles.containerModalAtualizar}>
                <h4>Tarefa a ser atualizada:</h4>

                <h4>Nova Tarefa:</h4>

                <form>
                    <input
                        type='text'
                        value={'teste'}
                        // onChange={}
                        required
                    />

                    <input
                        type="date"
                        value={'teste'}
                        // onChange={(evento) => setDataAtualizacaoTarefa(evento.target.value)}
                        required
                    />

                    <input
                        type='time'
                        value={'teste'}
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