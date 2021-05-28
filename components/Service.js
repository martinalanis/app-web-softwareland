import React from 'react'
import { Container, Row, Col } from "reactstrap"
const Service = () => {
  const services = [
    { title: "Websites & Web apps", desc: "Sitios web, ecommerce, aplicaciones web a la medida." },
    { title: "Desarrollo Móvil", desc: "Todo tipo de aplicaciones moviles para cualquier dispositivo" },
    { title: "CRM", desc: "App personalizada para optimizar tus ventas. Ten control total de tus clientes, ventas, cotizaciones, recibos, etc." },
    { title: "Marketing", desc: "Estrategias de mercado que acelerarán e impulsarán un siguiente nivel tu marca" },
    { title: "Branding", desc: "¿Tienes una nueva idea?, nosotros te ayudamos a llevarla a un siguiente nivel" },
    { title: "IoT", desc: "Sistemas autónomos que te ayudaran con muchas de tus tareas cotidianas" },
  ]

  return (
    <section className="section" id="servicios">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Servicios</span></h3>
              <p className="text-muted">Ofrecemos servicios integrales de negocios que posicionarán tu marca a un siguiente nivel</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                    <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  )
}
export default Service
