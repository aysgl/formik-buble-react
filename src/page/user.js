import React, { useContext, useEffect } from 'react'
import { Container, Row, Col, Badge } from 'reactstrap';
import Horoscope from '../components/horoscope';
import { FormContext } from '../context/FormContext';
import { useParams, useNavigate } from 'react-router-dom'

export default function User() {
    let navigate = useNavigate();
    const { values, collection, number } = useContext(FormContext)
    const { horoscope } = useParams();
    // const values = JSON.parse(localStorage.getItem('values'));

    return (
        <>
            {values.name != "jane" ?
                <Container className='text-white text-center py-5'>
                    <Horoscope />
                    <h1 className='display-3 my-4'>hi, {values.name} ツ</h1>
                    <h2 className='h3 mb-4'>what's your ...?</h2>

                    {collection.filter(i => i.name === horoscope).map((i, key) =>
                        <Row className='g-4 px-5 pt-3' key={key}>
                            <Col md={6} lg={4}>
                                <Badge
                                    className='text-dark shadow'
                                    color="light"
                                    style={{ transform: `scale(1.${number + 10})`, transition: ".8s" }}
                                    pill
                                >
                                    <span className='small fw-light'>..element</span> {i.featured.element}
                                </Badge>
                            </Col>
                            <Col md={6} lg={4}>
                                <Badge
                                    className='text-dark shadow'
                                    color="light"
                                    style={{ transform: `scale(1.${number + 20})`, transition: ".6s" }}
                                    pill
                                >
                                    <span className='small fw-light'>..color</span> <span style={{ backgroundColor: `${i.featured.color.replace(/ /g, "")}` }}>.</span>{i.featured.color}
                                </Badge>
                            </Col>
                            <Col md={6} lg={4}>
                                <Badge
                                    className='text-dark shadow'
                                    color="light"
                                    style={{ transform: `scale(1.${number + 40})`, transition: "2s" }}
                                    pill
                                >
                                    <span className='small fw-light'>..lucky gem</span> {i.featured.lucky_gem}
                                </Badge>
                            </Col>
                            <Col md={6} lg={4}>
                                <Badge
                                    className='text-dark shadow'
                                    color="light"
                                    style={{ transform: `scale(1.${number + 30})`, transition: "1s" }}
                                    pill
                                >
                                    <span className='small fw-light'>..polarity</span> {i.featured.polarity}
                                </Badge>
                            </Col>
                            <Col md={6} lg={4}>
                                <Badge
                                    className='text-dark shadow'
                                    color="light"
                                    style={{ transform: `scale(1.${number + 50})`, transition: "1s" }}
                                    pill
                                >
                                    <span className='small fw-light'>..quality</span> {i.featured.quality}
                                </Badge>
                            </Col>
                            <Col md={6} lg={4}>
                                <Badge
                                    className='text-dark shadow'
                                    color="light"
                                    style={{ transform: `scale(1.${number + 30})`, transition: ".6s" }}
                                    pill
                                >
                                    <span className='small fw-light'>..flower</span> {i.featured.flower}
                                </Badge>
                            </Col>
                            <Col md={6} lg={4}>
                                <Badge
                                    className='text-dark shadow'
                                    color="light"
                                    style={{ transform: `scale(1.${number + 20})`, transition: "2s" }}
                                    pill
                                >
                                    <span className='small fw-light'>..planet</span> {i.featured.planet}
                                </Badge>
                            </Col>
                            <Col md={6} lg={4}>
                                <Badge
                                    className='text-dark shadow'
                                    color="light"
                                    style={{ transform: `scale(1.${number + 10})`, transition: "1s" }}
                                    pill
                                >
                                    <span className='small fw-light'>..love matches ==</span> {i.featured.love_matches}
                                </Badge>
                            </Col>
                        </Row>
                    )}
                </Container >
                :
                navigate("/")
            }
        </>
    )
}
