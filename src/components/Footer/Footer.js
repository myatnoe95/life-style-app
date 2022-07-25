import React from "react";
import { Row , Col} from "reactstrap";
import { House , Search, Bookmark} from 'react-bootstrap-icons';


const Footer = () => {
    return(
          <div 
            style={{
                backgroundColor: 'blue', 
                height: '70px', 
                width: '100%', 
                borderTopLeftRadius: '30px', 
                borderTopRightRadius: '30px', 
                bottom: 0,
                position: "fixed",
            }}
            className ="mt-auto"
          >
            <Row style={{marginTop: '20px'}}>
                <Col>
                    <Col><House size={20} color='#fff'/></Col>
                    <Col className="mt-1">Home</Col>
                </Col>
                <Col>
                    <Col><Search size={20} color='#fff'/></Col>
                    <Col className="mt-1">Search</Col>     
                </Col>
                <Col >
                    <Col> <Bookmark size={20} color='#fff'/></Col>
                    <Col className="mt-1">Saved</Col> 
                   
                </Col>
            </Row>
          </div>
    )
}

export default Footer;