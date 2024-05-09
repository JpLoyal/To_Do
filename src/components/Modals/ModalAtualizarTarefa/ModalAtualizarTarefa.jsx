import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';

const ModalAtualizarTarefa = ({
    tasks,
    atualizarTarefa,
    modalAtualizarIsOpen,
    fecharModalDeAtualizacao,
    indexDaTarefaASerAtualizada,
    tarefaAtualizadaNoInputDoModal,
    setTarefaAtualizadaNoInputDoModal,
    setModalAtualizarIsOpen
}) => {

    const [idAtualizacaoTarefa, setIdAtualizacaoTarefa] = useState('');
    const [descricaoAtualizacaoTarefa, setDescricaoAtualizacaoTarefa] = useState('');
    const [dataAtualizacaoTarefa, setDataAtualizacaoTarefa] = useState('');
    const [horarioAtualizacaoTarefa, setHorarioAtualizacaoTarefa] = useState('');
    const [statusAtualizacaoTarefa, setStatusAtualizacaoTarefa] = useState('');

    useEffect(() => {
        if (indexDaTarefaASerAtualizada !== null) {
            setIdAtualizacaoTarefa(tasks[indexDaTarefaASerAtualizada].id)
            setDescricaoAtualizacaoTarefa(tasks[indexDaTarefaASerAtualizada].descricao);
            setDataAtualizacaoTarefa(tasks[indexDaTarefaASerAtualizada].data);
            setHorarioAtualizacaoTarefa(tasks[indexDaTarefaASerAtualizada].horario);
            setStatusAtualizacaoTarefa(tasks[indexDaTarefaASerAtualizada].status);
        }
    }, [indexDaTarefaASerAtualizada, tasks]);

    return (
        <ReactModal
            isOpen={modalAtualizarIsOpen}
            onRequestClose={fecharModalDeAtualizacao}
        >
            <h4>Tarefa a ser atualizada:</h4>
            
            {indexDaTarefaASerAtualizada !== null && (
                <p>{tasks[indexDaTarefaASerAtualizada].descricao}</p>
            )}

            <h4>Nova Tarefa:</h4>

            <form onSubmit={(evento) => {
                evento.preventDefault();
                atualizarTarefa(indexDaTarefaASerAtualizada, tarefaAtualizadaNoInputDoModal);
                setTarefaAtualizadaNoInputDoModal('');
                setModalAtualizarIsOpen(false);
                
                const objTarefaAtualizada = {
                    id: idAtualizacaoTarefa,
                    descricao: descricaoAtualizacaoTarefa,
                    data: dataAtualizacaoTarefa,
                    horario: horarioAtualizacaoTarefa,
                    status: statusAtualizacaoTarefa,
                }
                atualizarTarefa(indexDaTarefaASerAtualizada, objTarefaAtualizada)
                
            }}>
                <input
                    type='text'
                    value={descricaoAtualizacaoTarefa}
                    onChange={(evento) => setDescricaoAtualizacaoTarefa(evento.target.value)}
                />

                <input
                    type="date"
                    value={dataAtualizacaoTarefa}
                    onChange={(evento) => setDataAtualizacaoTarefa(evento.target.value)}
                />

                <input
                    type='time'
                    value={horarioAtualizacaoTarefa}
                    onChange={(evento) => setHorarioAtualizacaoTarefa(evento.target.value)}
                />

                <button type='submit'>Atualizar Tarefa</button>
            </form>

            <button onClick={fecharModalDeAtualizacao}>Fechar Modal</button>
        </ReactModal>
    )
}

export default ModalAtualizarTarefa;