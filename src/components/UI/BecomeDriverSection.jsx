import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"; // Import Link from React Router

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            {/* Use Link to navigate to PublishRidePage */}
            <Link to="/PublishRidePage" className="publish-ride-button">
              Publish a ride now
            </Link>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
