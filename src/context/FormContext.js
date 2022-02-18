import { useFormik } from 'formik';
import { createContext, useEffect, useState } from 'react'
import validationSchema from '../validation';
import { useNavigate } from "react-router-dom";
import { collection } from '../data/collection';

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
    let navigate = useNavigate();
    const [number, setNumber] = useState(50);

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, actions } = useFormik({
        initialValues: {
            id: collection.id,
            name: 'jane',
            lastname: 'doe',
            email: 'jane@doe.com',
            gender: "female",
            horoscope: ["leo"],
        },
        onSubmit: values => {
            navigate(`/${values.horoscope}`);
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
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        actions,
        number,
        collection,
    }

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

