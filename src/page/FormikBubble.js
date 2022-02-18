import { Container, Row, Col } from "reactstrap"
import Forms from '../components/form';
import Output from '../components/output';

export default function FormikBubble() {
    return (
        <Container className='d-flex align-items-center vh-100'>
            <Row className="g-5 mx-5">
                <Col md={7}>
                    <Forms />
                </Col>
                <Col md={5}>
                    <Output />
                </Col>
            </Row>
        </Container >
    )
}

