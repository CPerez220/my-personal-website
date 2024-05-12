import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <>
    <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Top</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Experience</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Footer