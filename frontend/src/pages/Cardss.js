import React from 'react'
import { Carousel, Card, Row, Col, CardImg, Button } from 'react-bootstrap';
import styled from 'styled-components';

// Import local images
import Image1 from './utility/Book1.jpg';
import Image2 from './utility/Book2.jpg';
import Image3 from './utility/Book3.jpg';
import Image4 from './utility/Book4.jpg';
import Image5 from './utility/Book5.jpg';
import Image6 from './utility/Book6.jpg';
import Image7 from './utility/Book7.jpg';
import Image8 from './utility/Book8.jpg';
import Image9 from './utility/Book9.jpg';
import Image10 from './utility/Book10.jpg';
import Image11 from './utility/Book11.jpg';
import Image12 from './utility/Book12.jpg';

import Image13 from './utility/Carausal1.jpg';
import Image14 from './utility/Carausal2.jpg';
import Image15 from './utility/Carausal3.jpg';
import Image16 from './utility/Carausal4.jpg';
import Image17 from './utility/Carausal5.jpg';


const Stylecard = styled(Card)`
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
  border: 1px solid #black;
  border-radius: 4px;
  padding: 5px;
  width: 200px;
  margin-bottom: 10px;
  margin-top: 7px;
  margin-left: 10px;
`;

const StyledCardText = styled(Card.Text)`
  font-weight: normal;
  span.bold {
    font-weight: bold;
  }
`;

const PriceButton = styled(Button)`
  background-color: #fff;
  color: green;
  border: 1px solid green;
  &:hover {
    background: #397d58 !important;
    color: #fff !important;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Separator = styled.hr`
  border: none;
  border-top: 5px solid #333;
  margin: 20px 0;
`;

const CenteredDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;


const card = () => {
  return (
    // <div>card</div>
    <>

<Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image13} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image14} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image15} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image16} alt="Fourth slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image17} alt="Fifth slide" />
                </Carousel.Item>
            </Carousel>
            <Separator />
            <CenteredDiv>
                <h2>Best Sellers</h2>
            </CenteredDiv>
            <Separator />
            <Row>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image1} />
                                <Card.Title>The Psychology of Money</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2016 <br />
                                    <span className="bold">By:</span>Morgan Housel (Author) #1 NEW YORK TIMES BESTSELLER<br />
                                    <ButtonWrapper>
                                        <PriceButton>₹303</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image2} />
                                <Card.Title>Ikigai</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2017 <br />
                                    <span className="bold">By:</span> Francesc Miralles(Author), Hector Garcia (Author), Garcia Hector(Author)<br />
                                    <ButtonWrapper>
                                        <PriceButton>₹396</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image3} />
                                <Card.Title>The Silent Patient</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2019 <br />
                                    <span className="bold">By:</span> Alex Michaelides (Author) #1 New York Times bestseller<br />
                                    <ButtonWrapper>
                                        <PriceButton>₹303</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image4} />
                                <Card.Title>The Secret</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2006 <br />
                                    <span className="bold">By:</span> Rhonda Byrne (Author) <br />
                                    <span className="bold">Publisher Imprint:</span> Atria Books <br />
                                    <ButtonWrapper>
                                        <PriceButton>₹455</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image5} />
                                <Card.Title>Bhagavad Gita: Yatharoop</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2016 <br />
                                    <span className="bold">By:</span> A.C. Bhaktivedanta Swami Prabhupada (Author) <br />
                                    <ButtonWrapper>
                                        <PriceButton>₹455</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image6} />
                                <Card.Title>Word Power Made Easy</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2015 <br />
                                    <span className="bold">By:</span> Norman Lewis (Author) <br />
                                    <ButtonWrapper>
                                        <PriceButton>₹119</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
            </Row>
            <Separator />
            <CenteredDiv>
                <h2>Now Trending</h2>
            </CenteredDiv>
            <Separator />
            <Row>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image7} />
                                <Card.Title>Atomic Habits</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2018 <br />
                                    <span className="bold">By:</span>  James Clear (Author) <br />
                                    <span className="bold">Publisher Imprint:</span> Arrow <br />

                                    <ButtonWrapper>
                                        <PriceButton>₹551</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image8} />
                                <Card.Title>Karma: A Yogi's Guide to Crafting Your Destiny</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2021 <br />
                                    <span className="bold">By:</span> Sadhguru (Author) <br />
                                    <ButtonWrapper>
                                        <PriceButton>₹239</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image9} />
                                <Card.Title>The Power of A Positive Attitude</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2016 <br />
                                    <span className="bold">By:</span> Roger Fritz; Edited by Arthur R. Pell,(Author) <br />
                                    <ButtonWrapper>
                                        <PriceButton>₹89</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image10} />
                                <Card.Title>Think and Grow Rich</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2021 <br />
                                    <span className="bold">By:</span> Napoleon Hill (Author)<br />
                                    <ButtonWrapper>
                                        <PriceButton>₹119</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image11} />
                                <Card.Title>El Enigmatico Senor Quin</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2016 <br />
                                    <span className="bold">By:</span> Agatha Cristie <br />
                                    <span className="bold">Language:</span> Spanish <br />
                                    <ButtonWrapper>
                                        <PriceButton>₹1,525</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
                <Col>
                    <Stylecard>
                        <Card>
                            <Card.Body>
                                <CardImg variant="top" src={Image12} />
                                <Card.Title>EL Asesinato de Roger Ackroyd</Card.Title>
                                <StyledCardText>
                                    <span className="bold">Released:</span> 2016 <br />
                                    <span className="bold">By:</span> Agatha Cristie <br />
                                    <span className="bold">Language:</span> Spanish <br />
                                    <ButtonWrapper>
                                        <PriceButton>₹1,339</PriceButton>
                                    </ButtonWrapper>
                                </StyledCardText>
                            </Card.Body>
                        </Card>
                    </Stylecard>
                </Col>
            </Row>
            <Separator />
    

    
    
    </>
  )
}

export default card