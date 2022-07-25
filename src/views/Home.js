import React from "react";
import { Row, Col, Media} from 'reactstrap';
import {PersonFill, Heart, Bookmark} from 'react-bootstrap-icons';
import Book1 from '../assets/img/book1.png';
import Book2 from '../assets/img/book2.png';
import Book3 from '../assets/img/book3.png';

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

     <div style={{backgroundColor: '#E87642', height: '450px',  position: 'absolute',
      top: '-80px',zIndex: '-1', width: '100%', borderBottomLeftRadius: '80px'}}>
         <div style={{marginTop: '280px',}}>
            <Row className="mx-4 text-white">
              TODAY 5:30PM
            </Row>
            <Row className="mt-1 px-2 text-white">
                <Col>ဆင်းရဲကင်းကွာ အောင်မြင်ရာ နေထိုင်နည်းကျင့်စဉ် </Col>
                <Col>
                  <Media object src={Book1}/>
                </Col>
            </Row>
            <Row  className="mx-4 mt-3 text-white">
              <Col>Author By Dr.Myo</Col>
              <Col> <Bookmark size={20} /></Col>
            </Row>
         </div>
     </div>

     <div style={{backgroundColor: '#8A56AC', height: '670px',position: 'absolute',
      top: '-80px',zIndex: '-2', width: '100%', borderBottomLeftRadius: '80px'}}>
        <div style={{marginTop: '500px',}}>
            <Row className="mx-4 text-white">
              TUESDAY 5:30PM
            </Row>
            <Row className="mt-1 px-2 text-white ">
                <Col>စာမေးခြင်း အတတ်ပညာ </Col>
                <Col>
                  <Media object src={Book2} />
                </Col>
            </Row>
            <Row  className="mx-4 mt-3 text-white">
              <Col>Author By Mr.Jame</Col>
              <Col> <Bookmark size={20} /></Col>
            </Row>
         </div>
     </div>

     <div style={{backgroundColor: '#000000',height: '900px',position: 'absolute',
      top: '-80px',zIndex: '-3', width: '100%'}}>
       <div style={{marginTop: '700px',}}>
            <Row className="mx-4 text-white">
              FRIDAY 6:00PM
            </Row>
            <Row className="mt-1 px-2 text-white">
                <Col>Developer ဖြစ်အောင် လုပ်နည်း</Col>
                <Col>
                  <Media object src={Book3} />
                </Col>
            </Row>
            <Row  className="mx-4 mt-3 text-white">
              <Col>Author By Lusis</Col>
              <Col> <Bookmark size={20} /></Col>
            </Row>
         </div>
     </div>
        
    </div>
    )
}

export default Home;