import React from "react";
import Default from "../templates/Default";
// import Loading from "../atoms/Loading";
import encontro22 from "../../img/adesivo.jpg";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


// import { useNavigate } from "react-router-dom";
// import ReactDOM from "react-dom";

export default function Home(){
    // const [loading, setLoading] = React.useState(false);

    // loading ?
return  (
  //   <Loading />
  // ) : (
    <Default>
        <div className="hspace"></div>
        <Container className="capa">
          <Row>
            <Col>
              <Image  src={encontro22} thumbnail />
            </Col>
          </Row>
        </Container>
    </Default>


);
}
         
