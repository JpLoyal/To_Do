import ReactModal from 'react-modal';
import BotaoAdicionarTarefa from '../../BotaoAdicionarTarefa/BotaoAdicionarTarefa';
import styles from './ModalAdicionarTarefa.module.css'

const ModalAdicionarTarefa = ({
    modalAdicionarIsOpen,
    fecharModalDeCriacao,
    adicionarTarefa,
    descricaoNovaTarefa,
    setDescricaoNovaTarefa,
    setDataNovaTarefa,
    setHorarioNovaTarefa
}) => { 

    return (
        <ReactModal
            isOpen={modalAdicionarIsOpen}
            onRequestClose={fecharModalDeCriacao}
            className={'estilosModals'}
        >
            <section className={styles.containerForm}>
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    adicionarTarefa();
                    fecharModalDeCriacao();
                }}>
                    <label htmlFor="descricao">Tarefa:</label>
                    <input
                        id='descricao'
                        type="text"
                        value={descricaoNovaTarefa.descricao}
                        onChange={(evento)=>setDescricaoNovaTarefa(evento.target.value)}
                        placeholder="Descrição da Tarefa"
                        required
                    />

                    <label htmlFor="data">Data:</label>
                    <input
                        id='data'
                        type="date"
                        placeholder="Data"
                        onChange={(evento)=>setDataNovaTarefa(evento.target.value)}
                        required
                    />

                    <label htmlFor="horario">Hora:</label>
                    <input
                        id='horario'
                        type="time"
                        placeholder="Hora"
                        onChange={(evento)=>setHorarioNovaTarefa(evento.target.value)}
                        required
                    />
                    <BotaoAdicionarTarefa />
                    <button type="button" onClick={fecharModalDeCriacao}>Cancelar</button>
                </form>
                
            </section>
        </ReactModal>
    )
}

export default ModalAdicionarTarefa;