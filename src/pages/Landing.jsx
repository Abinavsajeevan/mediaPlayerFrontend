import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
      <Row className='w-100 mt-5 d-flex justify-content-center align-items-center ps-4'>
        <Col md={1}>
        </Col>
        <Col md={5} className='p-3'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officiis ea sed laudantium accusantium enim ex, quia quam esse eius totam molestiae quo aut magni, unde excepturi adipisci corporis. Fugit ipsa reiciendis quibusdam amet voluptatem!</p>
          <Link to='/home'><button className='btn btn-warning mt-5'>Get started</button></Link>
        </Col>

        <Col md={1}>
        </Col>

        <Col md={5} className='d-flex justify-content-center align-itens-center p-5'>
          <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-75' />
        </Col>
      </Row>

      <div className="container">
        <h3 className='text-center my-5'>Features</h3>
        <Row>
          <Col md={1}></Col>

          <Col md={3}>
          <Card style={{ width: '100%' }} className='p-3 mt-3'>
      <Card.Img variant="top" src="https://media3.giphy.com/media/LNqcJiV4Abf4QIfhE0/giphy.gif?cid=6c09b952dhdq58zrqp0x6hmo6bc3v754b1fdq8qjmbnk5std&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>

          <Col md={4} className='px-md-5'>
          <Card style={{ width: '100%' }} className='p-3 mt-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/6b/2f/1c/6b2f1c5dba92f48a53020755a9887e06.gif" height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>

          <Col md={3}>
          <Card style={{ width: '100%' }} className='p-3 mt-3'>
      <Card.Img variant="top" src="https://i.makeagif.com/media/5-26-2014/mvoDga.gif" height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>

          <Col md={1}></Col>
        </Row>

      </div>

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-10 border border-secondary p-3 my-5 border-2 rounded">
            <div className="row">
              <div className="col-md-6">
                <h3 className='text-warning'>Simple fast and PowerFul</h3>
                <p className='mt-5'><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, autem doloremque. Ratione sit iste ad id nulla soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat, soluta sit corrupti mollitia eius cumque at!</p>
                <p><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, autem doloremque. Ratione sit iste ad id nulla soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio cupiditate error. Recusandae molestiae excepturi vel culpa?</p>
                <p><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, autem doloremque. Ratione sit iste ad id nulla soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam ex consequatur libero, magni cumque natus aliquid.</p>

              </div>

              <div className="col-md-6">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/o_2zUNUdzNs?si=VsZ65dxi8uW2T7H_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>

          </div>

          <div className="col-md-1"></div>
        </div>
      </div>

    </>
  )
}

export default Landing