import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Circulo from "../images/circulo-home-page.png"

const MyProjects = () => {
  return(
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Card style={{ width: "45%", boxShadow: '0 4px 6px rgba(0, 255, 255, 0.5)' }}>
      <Card.Img variant="top" src={Circulo} />
      <Card.Body>
        <Card.Title>Circulo</Card.Title>
        <Card.Text>
        A robust social networking platform that empowers users to create and manage their own communities while facilitating seamless communication with other members.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Category: Web Development</ListGroup.Item>
        <ListGroup.Item>Tecnologies: Javascript, HTML, Bootstrap, React.js, Database, Server, API, Bcrypt, JsonWebToken, Prisma</ListGroup.Item>
        <ListGroup.Item>Type: Social Media</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Render</Card.Link>
        <Card.Link href="#">Github</Card.Link>
      </Card.Body>
    </Card>

    </div>
    <h1>Anticipate more exciting projects! I’m currently collaborating with my team on a captivating video game for my capstone project. Additionally, we’re developing a mobile version of ‘Circulo.’ Beyond that, I’ve been actively engaged in personal projects, exploring cutting-edge technologies. Stay tuned as I begin sharing some of my past college projects as well.</h1>
    </>
  )
}

export default MyProjects