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
            <Container className='bg-light ' style={{width:'60%', marginTop:'10px', padding:'20px' }}>
                <h3  style={{textAlign: 'center', height:'50px', backgroundColor:'#ffc107', alignItems: 'center', paddingTop:'7px'}}>Envoyez-nous votre opinion</h3>
                <Form  className="mb-2 mt-2 ">
                    <Row >
                        <Form.Group as={Col} controlId="formGridFirstName">
                          <Form.Label>Prénom</Form.Label>
                          <Form.Control placeholder="votre prénom" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                          <Form.Label>Nom</Form.Label>
                          <Form.Control  placeholder="votre nom" />
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Saisis votre email" />
                    </Form.Group >

                    <Form.Group controlId="formGridSujet">
                        <Form.Label >Sujet</Form.Label>
                        <Form.Control   />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGridMessage" >
                        <Form.Label>Votre message</Form.Label>
                        <Form.Control as="textarea" placeholder="..." />
                    </Form.Group >

                    <Button variant="outline-warning" type="submit" style={{alignItems: 'center'}} >
                        Envoyer
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Contact;