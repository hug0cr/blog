import { Row,
    Col,
    Container
} from 'react-bootstrap';

import './Footer.css';

function Footer() {
    let myStyle = {
        p:{
            paddingLeft: '3px',
            fontStyle: 'italic'
        }
    }
    return (
        <footer id='footer'>
            <Container fluid className="bg-light">
                <Row id="info">
                    <Col id='col-left' className='col-4 px-4 xs-none'> 
                        <h5  className='text-dark'>Cuisine du monde</h5>
                        <p>Nous vous emnennerons à travers la cuisine dans le monde. Laisse-la nous raconter son histoire </p>
                    </Col>
                    <Col id="col-site">
                        <h6 className='text-dark'>Nos site</h6>
                        <p style={myStyle.p}>Blogs</p>
                        <p style={myStyle.p}>Articles</p>
                        <p style={myStyle.p}>About</p>
                    </Col>
                    <Col id='col-contact'>
                        <h6 className='text-dark'>Contact</h6>
                        <p style={myStyle.p}>WF3_group6@gmail.com</p>
                        <p style={myStyle.p}>+3367 896 543</p>
                    </Col>
                    <Col id='col-legal'>
                        <h6 className='text-dark'>Légale</h6>
                        <p style={myStyle.p}>FAQ</p>
                        <p style={myStyle.p}>Privacy</p>
                    </Col>                    
                </Row>
                <Row id="copyright" style={{textAlign: 'center'}}>
                    <small>© 2023 by Cuisine du mone. Créer par Anzor, Hugo & Nga</small>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;