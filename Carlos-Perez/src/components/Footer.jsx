import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <>
    <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="#intro">Intro</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#education">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#experience">Experience</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Footer