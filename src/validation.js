import * as Yup from 'yup';

const validations = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required(),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password")]).required()
});

export default validations