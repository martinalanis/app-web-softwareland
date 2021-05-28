import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-success font-weight-medium f-14 mb-2">
                SOFTWARELAND
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Haz crecer tu empresa con las mejores <span className="text-primary font-weight-medium">tecnologías</span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                Somos un equipo apasionado de desarrolladores de software en Morelia, México. Desarrollamos apps móviles y sistemas de administración con las mejores tecnologías emergentes.
              </p>
              <a href="#" className="btn btn-warning">
                Contactar <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/team.svg" alt="Team" className="img-fluid mx-auto d-block" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Hero
