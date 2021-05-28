import React from 'react'
import { Container, Row, Col } from "reactstrap"
const FeatureBox = (props) => {
  return (
    <>
      {
        props.features.map(({ id, img, title, desc, link }, key) =>
          (id % 2 !== 0) ?
            <Row key={key} className={id === 1 ? "align-items-center" : "align-items-center mt-5"}>
              <Col md={5} >
                <div>
                  <img src={img} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
              <Col md={{ size: 6, offset: 1 }}>
                <div className="mt-5 mt-sm-0 mb-4">
                  {/* <div className="my-4">
                    <i className={icon}></i>
                  </div> */}
                  <h5 className="text-dark font-weight-normal mb-3 pt-3">{title}</h5>
                  <p className="text-muted mb-3 f-15">{desc}</p>
                  <a href={link} className="f-16 text-warning">Saber más <span className="right-icon ml-2">&#8594;</span></a>
                </div>
              </Col>
            </Row>
            :
            <Row key={key} className="align-items-center mt-5">
              <Col md={6}>
                <div className="mb-4">
                  {/* <div className="my-4">
                    <i className="mdi mdi-account-group"></i>
                  </div> */}
                  <h5 className="text-dark font-weight-normal mb-3 pt-3">{title}</h5>
                  <p className="text-muted mb-3 f-15">{desc}</p>
                  <a href={link} className="f-16 text-warning">Saber más <span className="right-icon ml-2">&#8594;</span></a>
                </div>
              </Col>
              <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
                <div>
                  <img src={img} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
            </Row>
        )
      }
    </>
  )
}
const Feature = () => {
  const features = [
    { id: 1, img: "./images/web.svg", title: "ANALISÍS", desc: "Entendemos tu negocio y diseñamos la mejor solución acorde a las necesidades del proyecto.", link: "/" },
    { id: 2, img: "./images/coding.svg", title: "DESARROLLO", desc: "Desarrollamos e implementamos la solución en base a las mejores prácticas. Nos ajustamos a los más altos estándares de tecnología brindando asi fiabilidad en cada producto.", link: "/" },
    { id: 3, img: "./images/seo.svg", title: "OPTIMIZACIÓN", desc: "Nuestros proyectos son optimizados de acuerdo con las mejores practicas de SEO y estrategias de marketing eficientes.", link: "/" },
  ]
  return (
    <section className="section" id="conocenos">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Conocenos</span></h3>
              <p className="text-muted">Somos un equipo comprometido con cada marca y es por ellos que buscamos utlizamos siempre las mejores tecnologias. Nuestra metodología ágil de trabajo nos permite conseguir los mejores resultados para cada proyecto.</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  )
}
export default Feature
