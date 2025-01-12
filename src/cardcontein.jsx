


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import env from "/env.jpg"

export default function AreaCard() {
  return (
    <div>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"style={{height:"180px",width:"300px"}} src={env} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
