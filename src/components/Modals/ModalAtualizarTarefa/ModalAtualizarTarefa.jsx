import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import styles from './ModalAtualizarTarefa.module.css';
import config from '../../../config';

const ModalAtualizarTarefa = ({
    tasks,
    setTasks,
    modalAtualizarIsOpen,
    setModalAtualizarIsOpen,
    fecharModalDeAtualizacao,
    tarefaASerAtualizada
}) => {

    const [descricaoNoModalDeAtualizacao, setDescricaoNoModalDeAtualizacao] = useState('');
    const [dataNoModalDeAtualizacao, setDataNoModalDeAtualizacao] = useState('');
    const [horarioNoModalDeAtualizacao, setHorarioNoModalDeAtualizacao] = useState('');

    const atualizarTarefa = async (tarefaAtualizada) => {
        const novasTarefas = [...tasks];
        console.log(tarefaAtualizada)
        novasTarefas.forEach((tarefa, i)=>{
            if (tarefa.id === tarefaAtualizada.id) {
                novasTarefas[i] = tarefaAtualizada
            } 
        })

        const idDaTarefaAtualizada = tarefaAtualizada.id;
        console.log('ID da tarefa que vai ser atualizada:', idDaTarefaAtualizada);
        
        // O erro acontece a partir daqui

        try {
            const response = await fetch(`${config.API_URL}/tarefas/${idDaTarefaAtualizada}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tarefaAtualizada),
            });
        
            if (!response.ok) {
                throw new Error('Erro ao atualizar a tarefa');
            }
        
            const data = await response.json();
            console.log('Tarefa atualizada com sucesso:', data);
            setTasks(novasTarefas)
            setModalAtualizarIsOpen(false)

        } catch (error) {
            console.error('Erro ao atualizar a tarefa:', error);
        }
    };

    
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

                <form onSubmit={(evento) => {
                    evento.preventDefault();

                    const tarefaAtualizada = {
                        id: tarefaASerAtualizada.id,
                        descricao: descricaoNoModalDeAtualizacao,
                        data: dataNoModalDeAtualizacao,
                        horario: horarioNoModalDeAtualizacao,
                        status: tarefaASerAtualizada.status
                    }

                    atualizarTarefa(tarefaAtualizada);
                }}>
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
                    <button type='button' onClick={() => setModalAtualizarIsOpen(false)}>Cancelar</button>
                </form>
            </section>
        </ReactModal>
    )
}

export default ModalAtualizarTarefa;