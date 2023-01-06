import React from 'react'
import {Card, Col, Row, Container, ListGroup} from 'react-bootstrap'


function Banner(){
    return <>
        <div className="position-absolute banner">
            <span className="bannerLeft">
                {["python", "c", "java", "cpp", "swift"].map((image, i) => (
                    <img className='logo left' src={image + ".png"} key={i} />
                ))}
             </span>
            <span className='bannerRight'>
                {["react", "javascript", "flask", "css-html", "bootstrap"].map((image, i) => (
                    <img className='logo right' src={image + ".png"} key={i} />
                ))}
             </span>
        </div>
        
    </>
}

function SchoolCard(){
    return <>
        <Card className="text-white school-card">
            <Card.Title style={{fontSize: '3em'}}><u>Education</u></Card.Title>
            <Card.Img variant="top" src="gv-logo.png" style={{width: "20vw"}}/>
            <Card.Body>
                <Card.Title>Grand Valley State University</Card.Title>
                <Card.Subtitle>BS Computer Science | 3.43 Overall GPA</Card.Subtitle>
                <Card.Subtitle className='mt-2'>May 2023</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className='cardListItem'>Twice nominated as an outstanding CS student by my professors</ListGroup.Item>
                <ListGroup.Item className='cardListItem'>Winter 2021, Winter 2022, Fall 2022 Dean's List</ListGroup.Item>
                <ListGroup.Item className='cardListItem'>3.73 GPA in Computer Science courses</ListGroup.Item>
                <ListGroup.Item className='cardListItem'>Completion of several math high level mathematics courses, including physics, (linear algebra?) and discreet mathematics</ListGroup.Item>
            </ListGroup>
        </Card>
    
    
        </>
}

function AboutMeCard(){
    return (
        <Card className='about-card'>
            <Card.Title style={{fontSize: "3em"}}><u>About Me</u></Card.Title>
            <Card.Text>My name is Casey Sytsema and I'm an aspiring web/software developer based out of Grand Rapids, Michigan. I'm currently a senior at Grand Valley State University studying computer science. Entering my final semester, I hope to find //somewhere to work?//.</Card.Text>
            <h5>My skills include:</h5>
            <ul>
                <li>Web Development</li>
                <ul>
                    <li>Client Side React</li>
                    <li>Server Side Flask</li>
                    <li>HTML5/CSS</li>
                    <li>Bootstrap 5</li>
                </ul>
                <li>Software Development</li>
                <ul>
                    <li>Java, Python, C Applications</li>
                    <li>iOS Mobile Application Development (Swift)</li>
                    <li>Backend development for full stack web applications</li>
                </ul>
            </ul>
            <p className='text-black'><b>I am seeking part time work for the winter semester, as well as a full-time job or internship after graduation (May 2023)</b></p>
        </Card>
    )
}

function CoursesCard(){
    return (
        <Card className='courses-card'>
            <Card.Title style={{fontSize: "3em"}}><u>Courses</u></Card.Title>
            <Card.Text>
                <ul>
                    <li>Data Structures & Algorithms</li>
                    <ul>
                        <li>Trees, Hash Maps, Stack</li>
                        <li>Searching & Sorting Algorithms</li>
                        <li>Dynamic Programming</li>
                    </ul>
                    <li>Web Application Programming</li>
                    <ul>
                        <li>HTML5, CSS, HTTP basics</li>
                        <li>JavaScript, React, Templating</li>
                        <li>Bootstrap</li>
                    </ul>
                    <li>Mobile Application Development</li>
                    <ul>
                        <li>iOS - Swift</li>
                        <li>Android - Kotlin</li>
                    </ul>
                    <li>Discreet Mathematics & Computer Organization</li>
                    <ul>
                        <li>Binary Mathematics</li>
                        <li>Computer Architecture</li>
                        <li>Memory Management</li>
                        <li>Assembly Programming</li>
                    </ul>
                    <li>Data Communications</li>
                    <ul>
                        <li>Socket Programming</li>
                        <li>Network Protocols</li>
                        <li>HTTP & Browser Communication</li>
                    </ul>
                </ul>
                Courses to be completed Winter 2023
                <ul>
                    <li>Video Game Development (physics, collisons, Unity/C#)</li>
                    <li>Operating Systems (threads, memory management)</li>
                    <li>Computer Science Capstone Project</li>
                </ul>
            </Card.Text>

        </Card>
    )
}
export default function Home(){

    return (
        <>
        <div className='background-image position-relative'>
            <Container className='position-absolute' style={{maxWidth: "100%", maxHeight: "100%"}}>
                <Row className='justify-content-md-center'>
                    <Col>
                        <div className='text-center text-white'>
                            <p style={{fontWeight: 'bold', fontSize: '3em'}}>Hi, I'm</p>
                            <p style={{fontWeight: 'bold', fontSize: '4em'}}>Casey Sytsema</p>
                        </div>
                    </Col>
                </Row>   
                <div>
                    
                        <h3 className='role'>Backend Software Developer</h3>
                        <h3 className='role' style={{float: 'right'}}>Full Stack Web Developer</h3>
                    
                </div>      
                <Row className='justify-content-md-center'>
                    <Banner />
                    <img className='headshot' src="headshot.jpg" />
                </Row>
                <Row>

                    <SchoolCard />
                    <AboutMeCard />
                    <CoursesCard />
                </Row>
            </Container>
        </div>
        
        
            

        </>
    )
}