import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const NotLoggedIn = ({role, setRole}) => {
    
    return (
        <div>
           <Navbar bg="black" variant="dark">
                <NavbarBrand href="">Bag Of Holding</NavbarBrand>
                <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                   <Nav.Item><Nav.Link href="/home">Home </Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
                </Nav>
            </Navbar> 
        </div>
    )
}



export default NotLoggedIn;