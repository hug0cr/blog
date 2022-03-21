import {
    Container,
    Col, 
    Row
} from 'react-bootstrap';
import './About.css';

function About() {
    const myPhoto = [
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/175753/pexels-photo-175753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
]
    return (
        <div className="containerPropos" style={{paddingTop:'40px'}}>
            <Container d-flex align-items-center >
                <Row >
                    <h4 className='text-center'>Header de "A propos"</h4>
                </Row>
                <Row >
                    <div  className="containerText col-md-6 col-sm-12">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora sed dolores beatae architecto, nesciunt laborum, eligendi exercitationem nam numquam tempore officiis. Maxime laborum, laudantium esse sapiente velit ipsa excepturi?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolorum omnis doloremque, fuga velit ullam harum, blanditiis ducimus incidunt necessitatibus maxime ea odit saepe totam praesentium minus porro quos ipsam.
                        </p>
                    </div>
                    <div  className="containerImg  col-md-6 col-sm-12 order-sm-1" >
                        <img src={myPhoto[0]} alt="photo1" className='shadow-2-strong img1'  />
                    </div>
                </Row>
                <Row>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita aut quaerat optio eligendi harum nihil quia illo unde culpa. Recusandae aliquam accusantium, doloremque molestiae ducimus amet iusto obcaecati asperiores!</p>
                </Row>

                <Row >
                    <div  className="containerImg  col-md-6 col-sm-12 " >
                        <img src={myPhoto[1]} alt="photo1" className='shadow-2-strong img1'  />
                    </div>
                    <div  className="containerText col-md-6 col-sm-12">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora sed dolores beatae architecto, nesciunt laborum, eligendi exercitationem nam n
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolorum omnis doloremque, fuga velit ullam harum, blanditiis ducimus incidunt necessi
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default About;