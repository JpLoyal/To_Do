import ReactModal from 'react-modal';
import BotaoAdicionarTarefa from '../../BotaoAdicionarTarefa/BotaoAdicionarTarefa';

const ModalAdicionarTarefa = ({
    modalAdicionarIsOpen,
    fecharModalDeCriacao,
    adicionarTarefa,
    idNovaTarefa,
    setIdNovaTarefa,
    descricaoNovaTarefa,
    setDescricaoNovaTarefa,
    dataNovaTarefa,
    setDataNovaTarefa,
    horarioNovaTarefa,
    setHorarioNovaTarefa,
    statusNovaTarefa,
    setStatusNovaTarefa,
}) => {

    return (
        <ReactModal
            isOpen={modalAdicionarIsOpen}
            onRequestClose={fecharModalDeCriacao}
        >
            <form onSubmit={(evento) => {
                evento.preventDefault();
                adicionarTarefa();
                fecharModalDeCriacao();
            }}>
                <input
                    type="text"
                    value={descricaoNovaTarefa.descricao}
                    onChange={(evento)=>setDescricaoNovaTarefa(evento.target.value)}
                    placeholder="Descrição da Tarefa"
                    required
                />

                <input
                    type="date"
                    placeholder="Data"
                    onChange={(evento)=>setDataNovaTarefa(evento.target.value)}
                    required
                />

                <input
                    type="time"
                    placeholder="Hora"
                    onChange={(evento)=>setHorarioNovaTarefa(evento.target.value)}
                    required
                />
                

                <BotaoAdicionarTarefa />
            </form>
        </ReactModal>
    )
}

export default ModalAdicionarTarefa;