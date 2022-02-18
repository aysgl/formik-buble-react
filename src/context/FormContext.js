import { useFormik } from 'formik';
import { createContext, useEffect, useState } from 'react'
import validationSchema from '../validation';

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
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
            horoscope: ["leo"],
            validateOnChange: true
        },
        onSubmit: values => {
            console.log(values);
        }
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

    const value = {
        handleSubmit, handleChange, handleBlur, values, errors, touched, number, collection
    }

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

