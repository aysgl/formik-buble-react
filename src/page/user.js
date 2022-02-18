import React, { useContext } from 'react'
import { Container, Row, Col, Badge } from 'reactstrap';
import Horoscope from '../components/horoscope';
import { FormContext } from '../context/FormContext';
import { useParams } from 'react-router-dom'


export default function User() {
    const { values, collection, number } = useContext(FormContext)
    const { horoscope } = useParams();

    return (
        <Container className='text-white text-center py-5'>
            <Horoscope />
            <h1 className='display-3 my-4'>hi, {values.name} {values.lastname} ツ</h1>

            {collection.filter(i => i.name === horoscope).map((i, key) =>
                <Row className='g-4 px-5 pt-3'>
                    <Col md={6} lg={4}>
                        <Badge key={key}
                            className='text-dark shadow'
                            color="light"
                            style={{ transform: `scale(1.${number + 10})`, transition: ".8s" }}
                            pill
                        >
                            "element" {i.featured.element}
                        </Badge>
                    </Col>
                    <Col md={6} lg={4}>
                        <Badge key={key}
                            className='text-dark shadow'
                            color="light"
                            style={{ transform: `scale(1.${number + 20})`, transition: ".6s" }}
                            pill
                        >
                            "color" <span style={{ backgroundColor: `${i.featured.color.replace(/ /g, "")}` }}>.</span>{i.featured.color}
                        </Badge>
                    </Col>
                    <Col md={6} lg={4}>
                        <Badge key={key}
                            className='text-dark shadow'
                            color="light"
                            style={{ transform: `scale(1.${number + 40})`, transition: "2s" }}
                            pill
                        >
                            "lucky gem" {i.featured.lucky_gem}
                        </Badge>
                    </Col>
                    <Col md={6} lg={4}>
                        <Badge key={key}
                            className='text-dark shadow'
                            color="light"
                            style={{ transform: `scale(1.${number + 30})`, transition: "1s" }}
                            pill
                        >
                            "polarity" {i.featured.polarity}
                        </Badge>
                    </Col>
                    <Col md={6} lg={4}>
                        <Badge key={key}
                            className='text-dark shadow'
                            color="light"
                            style={{ transform: `scale(1.${number + 50})`, transition: "1s" }}
                            pill
                        >
                            "quality" {i.featured.quality}
                        </Badge>
                    </Col>
                    <Col md={6} lg={4}>
                        <Badge key={key}
                            className='text-dark shadow'
                            color="light"
                            style={{ transform: `scale(1.${number + 30})`, transition: ".6s" }}
                            pill
                        >
                            "flower" {i.featured.flower}
                        </Badge>
                    </Col>
                    <Col md={6} lg={4}>
                        <Badge key={key}
                            className='text-dark shadow'
                            color="light"
                            style={{ transform: `scale(1.${number + 20})`, transition: "2s" }}
                            pill
                        >
                            "planet" {i.featured.planet}
                        </Badge>
                    </Col>
                    <Col md={6} lg={4}>
                        <Badge key={key}
                            className='text-dark shadow'
                            color="light"
                            style={{ transform: `scale(1.${number + 10})`, transition: "1s" }}
                            pill
                        >
                            "love matches" {i.featured.love_matches}
                        </Badge>
                    </Col>
                </Row>
            )}
        </Container >
    )
}
