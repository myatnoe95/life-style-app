import React from "react";
import {Card,CardTitle,CardText,Button, Row, Col} from 'reactstrap';
import {PersonFill, Heart} from 'react-bootstrap-icons';

const Home = () => {
    return(
    <div 
          style={{
            width: '100%',
            // backgroundColor: 'blue', 
            // height: '100%',
            // textAlign: 'center', 
            // alignContent: 'center', 
            // alignItems: 'center'
          }}
    >

     <div style={{backgroundColor: '#fff', height: '100px' , width: '100%', borderBottomLeftRadius: '80px',}}>
        <Row>
          <Col className="my-3">
            <Col>You</Col>
            <Col><PersonFill/></Col>
          </Col>
          <Col className="my-3">Trending</Col>
          <Col className="my-3">
            <Col><Heart/></Col>
            <Col>Live</Col>
          </Col>
        </Row>
     </div>

     <div style={{backgroundColor: '#E87642', height: '400px',  position: 'absolute',
      top: '-80px',zIndex: '-1', width: '100%', borderBottomLeftRadius: '80px'}}>
         {/* <div style={{marginTop: '250px',}}>
            Home */}
            {/* <Row >
            Today 5:30PM
         </Row>
         <Row>
            <Col>Book Title</Col>
            <Col>Image</Col>
         </Row>
         <Row>Author By</Row> */}

         {/* </div> */}
       
     </div>

     <div style={{backgroundColor: '#8A56AC', height: '600px',position: 'absolute',
      top: '-80px',zIndex: '-2', width: '100%', borderBottomLeftRadius: '80px'}}>
        Book 2
     </div>

     <div style={{backgroundColor: '#000000',height: '800px',position: 'absolute',
      top: '-80px',zIndex: '-3', width: '100%'}}>
        Book 3
     </div>
        
    </div>
    )
}

export default Home;