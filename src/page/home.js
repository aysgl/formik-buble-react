import { Container, Row, Col } from "reactstrap"
import Forms from '../components/form';
import Output from '../components/output';

export default function Home() {
    return (
        <div className="d-flex vh-100 py-5">
            <Container className='d-flex my-auto flex-column'>
                <Row className="g-md-5 mx-md-5">
                    <Col lg={7} className="order-lg-1 order-2">
                        <Forms />
                    </Col>
                    <Col xs={10} md={8} lg={5} className="order-lg-2 order-1 mx-auto">
                        <Output />
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

