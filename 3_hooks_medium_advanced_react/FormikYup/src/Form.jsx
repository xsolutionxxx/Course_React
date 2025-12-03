/* 
// useFormik з Yup

import { useFormik } from "formik";
import * as Yup from "yup";

// або власна валідація або через Yup з validationSchema
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 2) {
    errors.name = "Min 2 char";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      amount: 0,
      currency: "",
      text: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Min 2 char").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      amount: Yup.number().min(5, "NO < 5 char").required("Required"),
      currency: Yup.string().required("Select some currency"),
      text: Yup.string().min(10, "NO < 10 char"),
      terms: Yup.boolean().required("Required").oneOf([true], "Required"),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Отправить пожертвование</h2>
      <label htmlFor="name">Ваше имя</label>
      <input
        id="name"
        name="name"
        type="text"
        {...formik.getFieldProps("name")}
      />
      {formik.errors.name && formik.touched.name ? (
        <div className="error">{formik.errors.name}</div>
      ) : null}
      <label htmlFor="email">Ваша почта</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}
      <label htmlFor="amount">Количество</label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.amount && formik.touched.amount ? (
        <div className="error">{formik.errors.amount}</div>
      ) : null}
      <label htmlFor="currency">Валюта</label>
      <select
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">Выберите валюту</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
      </select>
      {formik.errors.currency && formik.touched.currency ? (
        <div className="error">{formik.errors.currency}</div>
      ) : null}
      <label htmlFor="text">Ваше сообщение</label>
      <textarea
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.text && formik.touched.name ? (
        <div className="error">{formik.errors.text}</div>
      ) : null}
      <label className="checkbox">
        <input
          name="terms"
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        Соглашаетесь с политикой конфиденциальности?
      </label>
      {formik.errors.terms && formik.touched.terms ? (
        <div className="error">{formik.errors.terms}</div>
      ) : null}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form; */

// Formik components + Yup

import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        amount: 0,
        currency: "",
        text: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(2, "Min 2 char").required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        amount: Yup.number().min(5, "NO < 5 char").required("Required"),
        currency: Yup.string().required("Select some currency"),
        text: Yup.string().min(10, "NO < 10 char"),
        terms: Yup.boolean().required("Required").oneOf([true], "Required"),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <h2>Отправить пожертвование</h2>

        {/* <label htmlFor="name">Ваше имя</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage className="error" name="name" component="div" /> */}

        <MyTextInput label="Ваше имя" id="name" name="name" type="text" />

        {/* <label htmlFor="email">Ваша почта</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage name="email">
          {(msg) => <div className="error">{msg}</div>}
        </ErrorMessage> */}

        <MyTextInput label="Ваше почта" id="email" name="email" type="email" />

        {/* <label htmlFor="amount">Количество</label>
        <Field id="amount" name="amount" type="number" />
        <ErrorMessage className="error" name="amount" component="div" /> */}

        <MyTextInput
          label="Количество"
          id="amount"
          name="amount"
          type="number"
        />

        <label htmlFor="currency">Валюта</label>
        <Field id="currency" name="currency" as="select">
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
        </Field>
        <ErrorMessage className="error" name="currency" component="div" />

        <label htmlFor="text">Ваше сообщение</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage className="error" name="text" component="div" />

        {/* <label className="checkbox">
          <Field name="terms" type="checkbox" />
          Соглашаетесь с политикой конфиденциальности?
        </label>
        <ErrorMessage className="error" name="terms" component="div" /> */}

        <MyCheckbox name="terms">
          Соглашаетесь с политикой конфиденциальности?
        </MyCheckbox>

        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
