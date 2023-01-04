import React from 'react'
import {Card, Col, Row, Container, ListGroup} from 'react-bootstrap'


function Banner(){
    return <>
        <div className="position-absolute banner">
            <span className="bannerLeft">
                {["python", "c", "java", "cpp", "swift"].map((image) => (
                    <img className='logo' src={image + ".png"} />
                ))}
             </span>
            <span className='bannerRight'>
                {["react", "javascript", "flask", "css-html", "bootstrap"].map((image) => (
                    <img className={image + ' logo'} src={image + ".png"} />
                ))}
             </span>
        </div>
        
    </>
}

function SchoolCard(){
    return <>
        <Card className="text-white" style={{width: "50%", alignItems: "center", border: 0, background: "transparent"}}>
            <Card.Img variant="top" src="gv-logo.png" style={{width: "400px"}}/>
            <Card.Body>
                <Card.Title >Grand Valley State University</Card.Title>
                <Card.Subtitle>BS Computer Science | 3.43 Overall GPA</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className='text-white' style={{backgroundColor: "transparent"}}>Twice nominated as an outstanding CS student by my professors</ListGroup.Item>
                <ListGroup.Item className='text-white' style={{backgroundColor: "transparent"}}>Winter 2021, Winter 2022, Fall 2022 Dean's List</ListGroup.Item>
                <ListGroup.Item className='text-white' style={{backgroundColor: "transparent"}}>3.73 GPA in Computer Science courses</ListGroup.Item>
            </ListGroup>
        </Card>
    
    
        </>
}
export default function Home(){

    return (
        <>
        <div className='background-image position-relative'>
            <Container className='position-absolute' style={{maxWidth: "100%", maxHeight: "100%"}}>
                <Row className='justify-content-md-center'>
                    <Col>
                        <div className='text-center text-white'>
                            <p style={{fontWeight: 'bold', fontSize: 40}}>Hi, I'm</p>
                            <p style={{fontWeight: 'bold', fontSize: 70}}>Casey Sytsema</p>
                        </div>
                    </Col>
                </Row>         
                <Row className='justify-content-md-center'>
                    <Banner />
                    <img className='headshot' src="headshot.jpg" />
                </Row>
                <Row>
                    <label for="bannerRight" className="text-left text-white" style={{fontWeight: 'bold', fontSize: 30}}>Backend Software Developer</label>
                    <label for="bannerLeft" className="text-right" style={{fontWeight: 'bold', fontSize: 30}}>Full Stack Web Developer</label>
                </Row>

            </Container>
        </div>
        
        
            

        </>
    )
}