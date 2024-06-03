import Card from 'react-bootstrap/Card';
import style from './Card_atrativo.module.css'

function CardAtrativo({titulo, descricao, children}) {
  return (
    <Card style={{ width: '18rem' }} className={style.containerCardAtrativo}>
      <Card.Body>
        {children}
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descricao}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardAtrativo;