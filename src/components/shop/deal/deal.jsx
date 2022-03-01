import { Formik, Form, Field, ErrorMessage } from 'formik';

import style from './deal.module.css';

export const Deal = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Поле обязательно';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Ошибка адреса';
    }
    if (!values.name) {
      errors.name = 'Поле обязательно';
    }
    return errors;
  };

  return (
    <div className={style.deal}>
      <h2>Оформите заказ</h2>
      <Formik initialValues={{ email: '', name: '', phone: '' }} validate={validate} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={style.form}>
            <label htmlFor="email">Почта</label>
            <Field type="email" name="email" id="email" />

            <ErrorMessage name="email" component="div" />
            <label htmlFor="name"> Имя </label>
            <Field name="name" id="name" />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="phone"> Телефон </label>
            <Field name="phone" id="phone" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
