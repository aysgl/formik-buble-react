import React, { useContext } from 'react'
import { FormGroup, Label, Input, Form, Row, Col, FormFeedback } from "reactstrap"
import { FormContext } from '../context/FormContext'


export default function Forms() {
    const { values, errors, handleSubmit, handleChange, handleBlur, touched, collection } = useContext(FormContext)
    return (
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
    )
}
