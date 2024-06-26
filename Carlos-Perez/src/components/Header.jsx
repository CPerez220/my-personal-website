import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/projects'>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/videos">Videos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Header