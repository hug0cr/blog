import {
    Form,
    Row,
    Col,
    Button, 
    Container
} from 'react-bootstrap';
function Contact() {
    return (
        <div className="contactContainer" >
            <Container className='bg-light ' style={{width:'60%', marginTop:'30px', padding:'20px' }}>
                <h3  style={{textAlign: 'center', height:'50px', backgroundColor:'#ffc107', alignItems: 'center', paddingTop:'7px'}}>Envoyez-nous votre opinion</h3>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                          <Form.Label>Prénom</Form.Label>
                          <Form.Control placeholder="votre prénom" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                          <Form.Label>Nom</Form.Label>
                          <Form.Control  placeholder="votre nom" />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Saisis votre email" />
                    </Form.Group            >
                    <Form.Group className="mb-3" controlId="formGridMessage">
                        <Form.Label>Votre message</Form.Label>
                        <Form.Control placeholder="..." />
                    </Form.Group >
        
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check  type="checkbox" label="Souvenir-moi" />
                    </Form.Group>

                    <Button variant="outline-warning" type="submit" style={{alignItems: 'center'}}>
                        Envoyer
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Contact;