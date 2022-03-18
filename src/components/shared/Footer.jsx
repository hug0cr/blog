import {Container,
    Row,
    Col
} from 'react-bootstrap';
function Footer() {
    return (
        <footer>
            <Container>
                <Row id="info"></Row>
                <Row id="copyright">
                    <p>© 2023 by Cuisine du mone.
Créer par Anzor, Hugo & Nga</p>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;