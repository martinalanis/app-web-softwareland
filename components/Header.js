import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Header = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  const goTop = () => {
    router.replace('')
    window.scroll({ top: 0 })
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src="/images/logo.svg" alt="" className="logo-image" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="#" onClick={goTop}>Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#conocenos">Conocenos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#servicios">Servicios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#nosotros">Nosotros</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
