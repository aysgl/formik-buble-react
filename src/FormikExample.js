import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { FormGroup, Label, Input, Container, Form, Row, Col, FormFeedback, ListGroup, ListGroupItem } from "reactstrap"
import validationSchema from './validation';
// import Aquarius from './components/icons/aquarius';
import { ReactComponent as Aries } from "./components/icons/aries.svg";
import { ReactComponent as Taurus } from "./components/icons/taurus.svg";
import { ReactComponent as Gemini } from "./components/icons/gemini.svg";
import { ReactComponent as Cancer } from "./components/icons/cancer.svg";
import { ReactComponent as Leo } from "./components/icons/leo.svg";
import { ReactComponent as Virgo } from "./components/icons/virgo.svg";
import { ReactComponent as Libra } from "./components/icons/libra.svg";
import { ReactComponent as Scorpio } from "./components/icons/scorpio.svg";
import { ReactComponent as Sagittarius } from "./components/icons/sagittarius.svg";
import { ReactComponent as Capricorn } from "./components/icons/capricorn.svg";
import { ReactComponent as Aquarius } from "./components/icons/aquarius.svg";
import { ReactComponent as Pisces } from "./components/icons/pisces.svg";

export default function FormikExample() {
    const [number, setNumber] = useState(50);
    const collection = [
        { name: "aries" },
        { name: "taurus" },
        { name: "gemini" },
        { name: "cancer" },
        { name: "leo" },
        { name: "virgo" },
        { name: "libra" },
        { name: "scorpio" },
        { name: "sagittarius" },
        { name: "capricorn" },
        { name: "aquarius" },
        { name: "pisces" }
    ]
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            name: 'jane',
            lastname: 'doe',
            email: 'jane@doe.com',
            password: "",
            passwordConfirm: "",
            gender: "female",
            // horoscope: [
            //     { name: "aries" },
            //     { name: "taurus" },
            //     { name: "gemini" },
            //     { name: "cancer" }
            // ],
            horoscope: ["leo"],
            validateOnChange: true
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema
    })

    useEffect(() => {
        const interval = setInterval(
            () => setNumber(Math.floor((Math.random() * 50) + 20)),
            2000
        );

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <Container className='d-flex align-items-center vh-100'>
            <Row className={`g-5 w-100`}  >
                <Col md={6} className="ms-auto">
                    <Form className="bg-dark p-4 text-white h-100" onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <FormGroup >
                                    <Label className='text-secondary small mb-0' for="name">first name</Label>
                                    <Input
                                        className='bg-transparent rounded-0 border-0 border-bottom text-white'
                                        value={values.name}
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={errors.name && touched.name} />
                                    <FormFeedback invalid={errors.name && touched.name}>
                                        {errors.name && touched.name && <div>{errors.name}</div>}
                                    </FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className='text-secondary small mb-0' for="lastname">last name</Label>
                                    <Input
                                        className='bg-transparent rounded-0 border-0 border-bottom text-white'
                                        value={values.lastname}
                                        name="lastname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={errors.lastname && touched.lastname} />
                                    <FormFeedback invalid={errors.lastname && touched.lastname}>
                                        {errors.lastname && touched.lastname && <div>{errors.lastname}</div>}
                                    </FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label className='text-secondary small mb-0' for="email">email</Label>
                            <Input
                                className='bg-transparent rounded-0 border-0 border-bottom text-white'
                                value={values.email}
                                name="email"
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                invalid={errors.email && touched.email}
                            />
                            <FormFeedback invalid={errors.email && touched.email}>
                                {errors.email && touched.email && <div>{errors.email}</div>}
                            </FormFeedback>
                        </FormGroup>
                        <Label className='text-secondary small mb-0'>gender</Label>
                        <div className='d-flex mb-3'>
                            <FormGroup check className='me-3'>
                                <Input
                                    name="gender"
                                    value="female"
                                    type="radio"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.gender == "female"}
                                />
                                <Label check>
                                    female
                                </Label>
                            </FormGroup>
                            <FormGroup check className='me-3'>
                                <Input
                                    name="gender"
                                    value="male"
                                    type="radio"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label check>
                                    male
                                </Label>
                            </FormGroup>
                        </div>
                        <Label className='text-secondary small mb-0'>horoscope</Label>
                        <div>
                            {/* {Object.keys(horoscope => horoscope.name)}
                            {Object.keys(horoscope).reduce((acc, key) => {
                                acc[key] = horoscope[key] === null ? '' : horoscope[key];
                                return acc;
                            }, {})}

                            {Object.values(values.horoscope)} */}
                            {collection.map(i =>
                                <FormGroup check className='d-inline-block me-3'>
                                    <Input
                                        name="horoscope"
                                        value={i.name}
                                        type="radio"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        checked={values.horoscope.includes(i.name)}
                                    />
                                    <Label check>
                                        {i.name}
                                    </Label>
                                </FormGroup>
                            )}

                        </div>
                        {/* <Button color='warning' type="submit">Submit</Button> */}
                    </Form>
                </Col >
                <Col md={5}>
                    {Object.keys(values !== "") &&
                        <div className={`rotate shadow ${values.gender === "female" ? `bg-warning` : `bg-info`} h-100`} style={{ transition: '.5s', borderRadius: `${number}% ${number}% ${number}% ${number}% / ${number}% ${number}% ${number}% ${number}%` }}>
                            <div className='p-4 mb-0 text-warning'>
                                {/* {JSON.stringify(values)} */}
                                <ListGroup flush className='px-0 text-end'>
                                    <ListGroupItem className='bg-transparent text-dark px-0 border-0' style={{ marginRight: -number + 40, marginTop: -number, transition: "1s" }}>

                                        {/* {values.horoscope.includes("aquarius") && <Aquarius className="shadow rounded-pill" width="180px" />} */}


                                        {values.horoscope.includes("aries") && <Aries className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("taurus") && <Taurus className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("gemini") && <Gemini className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("cancer") && <Cancer className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("leo") && <Leo className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("virgo") && <Virgo className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("libra") && <Libra className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("scorpio") && <Scorpio className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("sagittarius") && <Sagittarius className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("capricorn") && <Capricorn className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("aquarius") && <Aquarius className="shadow rounded-pill" width="180px" />}
                                        {values.horoscope.includes("pisces") && <Pisces className="shadow rounded-pill" width="180px" />}
                                    </ListGroupItem>


                                    <ListGroupItem className='bg-transparent text-dark px-0 text-center display-3 border-0 lh-1 fw-bold'>
                                        {values.name}
                                        <br></br>
                                        {values.lastname}
                                    </ListGroupItem>
                                    <ListGroupItem className='bg-transparent px-0 border-0 text-center mb-4'>
                                        <a className='text-dark' href={`mailto:${values.email}`}>{values.email}</a>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    }
                </Col>
            </Row>
        </Container >
    )
}

