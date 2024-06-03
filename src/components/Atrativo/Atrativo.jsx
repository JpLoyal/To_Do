import styles from './Atrativo.module.css'
import CardAtrativo from '../Bootstrap/Cards/Cards_atrativo/Card_atrativo'
import { RiMindMap } from "react-icons/ri";
import { FcMindMap } from "react-icons/fc";
import { GiOvermind } from "react-icons/gi";
import { GiHiveMind } from "react-icons/gi";


const Atrativo = () => {
  return (
    <section className={styles.containerAtrativo}>
        <h5>Bem-vindo ao TaskMaster</h5>
        <div className={styles.containerCardsAtrativo}>
            <CardAtrativo
                titulo={'Crie tarefas com facilidade'}
                descricao={'Crie tarefas com um simples clique!'}>
                <RiMindMap />   
            </CardAtrativo>
            <CardAtrativo
                titulo={'Relembre tarefas'}
                descricao={'Marque todas as tarefas importantes!'}>
                <FcMindMap />
            </CardAtrativo>
            <CardAtrativo
                titulo={'Faça o TaskMaster ser seu'}
                descricao={'Pode manter você no topo!'}>
                <GiOvermind />
            </CardAtrativo>
            <CardAtrativo
                titulo={'Temas customizados'}
                descricao={'Mude o tema com facilidade!'}>
                <GiHiveMind />
            </CardAtrativo>
        </div>
    </section>
  )
}

export default Atrativo
