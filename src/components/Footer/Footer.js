import React from "react";
import { Row , Col} from "reactstrap";
import { House , Search, Bookmark} from 'react-bootstrap-icons';

import { NavLink } from 'react-router-dom';


const Footer = () => {
    return(
          <div 
            style={{
                backgroundColor: '#fff', 
                height: '80px', 
                width: '100%', 
                borderTopLeftRadius: '30px', 
                borderTopRightRadius: '30px', 
                bottom: 0,
                position: "fixed",
            }}
            className ="mt-auto"
          >
            <Row style={{marginTop: '20px',}}>
                <Col>
                    <Col><House size={20} /></Col>
                    <Col className="mt-1">
                        <a href="/" style={{textDecoration: 'none'}}>Home</a>
                    </Col>
                </Col>
                <Col>
                    <Col><Search size={20} /></Col>
                    <Col className="mt-1">
                        <a href="/profile" style={{textDecoration: 'none'}}>Search</a>
                    </Col>     
                </Col>
                <Col >
                    <Col> <Bookmark size={20} /></Col>
                    <Col className="mt-1">
                        <a href="/saved_booklist" style={{textDecoration: 'none'}}>Saved</a>
                    </Col> 
                   
                </Col>
            </Row>
          </div>
    )
}

export default Footer;