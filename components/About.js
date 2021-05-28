import React from 'react'
import { Container, Row, Col } from "reactstrap"
const About = () => {
  return (
    <section className="section bg-light" id="nosotros">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Sobre <span className="text-warning">Nosotros</span></h3>
              <p className="text-muted">Más de 10 años en el mercado de TI nos respaldan</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Estamos comprometidos con el éxito de cada uno de nuestros clientes</h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nuesta Misión</h6>
                <p className="text-muted font-weight-light">Ofrecer siempre las mejores soluciones técnologicas a cada uno de nuestros clientes.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nuestra Visión</h6>
                <p className="text-muted font-weight-light">Posicionarnos como la marca lider en el mercado de TI del país3.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default About
