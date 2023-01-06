import React from 'react'
import { Accordion, Card, CardGroup, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

function AbyssProject(){
    return (
        <Card>
            <Card.Img className='skill-image mx-auto' variant='top' src='/abyss.png' />
            <Card.Title className='mx-auto'>Neon Abyss Item Finder</Card.Title>
            <ListGroup className='list-group-flush'>
                <ListGroup.Item>Utility for the rogue-like PC game <i>Neon Abyss</i></ListGroup.Item>
                <ListGroup.Item>Uses requests and BeautifulSoup to scrape info from the game's Wiki</ListGroup.Item>
                <ListGroup.Item>Uses tkinter for a simple and clean GUI</ListGroup.Item>
            </ListGroup>
            <Card.Footer><a href="https://github.com/Casey-jS/abyss-item-finder">Source Code</a></Card.Footer>
        </Card>
    )
}

function PyNBAProject(){

    let description = "For my final project of my web development course, I chose to create a NBA fantasy/sports betting companion site."

    return (
        <Card>
            <Card.Title className='mx-auto'>NBA Utility Backend for NBA Website</Card.Title>
            <Card.Text>{description}
                </Card.Text>
            <Card.Subtitle>The Program:</Card.Subtitle>
            <li>Uses Flask for ??</li>
            <li>Stores NBA Player information and stats in sqlite3</li>
            <li>Handles requests from my client-side React front-end</li>
            <li>Utilizes an NBA API for fetching NBA stats to update databases</li>
            <Card.Footer><a href="https://github.com/Casey-jS/nba-util">Source Code</a></Card.Footer>
            
        </Card>
    )
}

function ThirdCard(){
    return (
        <Card>
            <Card.Title className='text-center'>Third Card</Card.Title>
        </Card>
    )
}

function NBACard(){
    return (
        <Card bg='dark' className='text-white'>
            <Card.Title className='text-white text-center'>NBA Stats Tracker</Card.Title>
            <Card.Img className='skill-image m-auto' src='/react.png'></Card.Img>
            <Card.Subtitle className='m-auto text-white'>NBA Sports Betting/Fantasy Companion</Card.Subtitle>
            <Card.Text>
                <h3>Features</h3>
            </Card.Text>
        </Card>
    )
}

export default function Skills(){
    return (
        <div>
            <img src='/bg.jpg' className='z-0 position-relative'></img>
            <h1 className='text-center text-white'>My Skills</h1>
            <Accordion className='z-1 position-absolute' defaultActiveKey="0">
                <Accordion.Item  className='accordion-element' eventKey="0">
                    <Accordion.Header><img src='/python.png' className='accordion-image'></img>Python</Accordion.Header>
                    <Accordion.Body>
                        <p>I have used Python for a little over 2 years. It is my language of choice when given a small-scale project to complete. <br></br> Over the years, I have completed projects in domains such as:</p>
                        <ul>
                            <li>Flask (server-side programming)</li>
                            <li>Backend data storage for web apps</li>
                            <li>Scripts for everyday use</li>
                            <li>Socket Programming</li>
                        </ul>
                        <h3 className='text-center'>Sample Projects</h3>
                        <CardGroup>
                            <AbyssProject />
                            <PyNBAProject />
                            <ThirdCard />
                        </CardGroup>
                        <h4 className='mt-4'>Other Projects</h4>


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='accordion-element' eventKey='1'>
                    <Accordion.Header><img src='/react.png' className='accordion-image' />JavaScript (React)</Accordion.Header>
                    <Accordion.Body>
                        <NBACard />
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='accordion-element' eventKey='2'>
                    <Accordion.Header><img src='/java.png' className='accordion-image' />Java</Accordion.Header>
                </Accordion.Item>
                <Accordion.Item className='accordion-element' eventKey='3'>
                    <Accordion.Header><img src='/c.png' className='accordion-image' /> <img src='/cpp.png' className='accordion-image' />Low Level Systems Programming</Accordion.Header>
                </Accordion.Item>
                <Accordion.Item className='accordion-element' eventKey='4'>
                    <Accordion.Header><img src='/css-html.png' className='accordion-image' /> <img src='/bootstrap.png' className='accordion-image' />UI/UX</Accordion.Header>
                </Accordion.Item>
                <Accordion.Item className='accordion-element' eventKey='5'>
                    <Accordion.Header><img src='/swift.png' className='accordion-image' />Mobile Application Development</Accordion.Header>
                </Accordion.Item>
                <Accordion.Item className='accordion-element' eventKey='6'>
                    <Accordion.Header><img src='/csharp.png' className='accordion-image' /> <img src='/github.png' className='accordion-image' /><img src='/vb.png' className='accordion-image' />Miscellaneous</Accordion.Header>
                </Accordion.Item>

            </Accordion>
            </div>
        
    )
}