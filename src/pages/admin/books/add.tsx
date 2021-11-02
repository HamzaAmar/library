import { Layout } from '@components/core';
import { FormController, Input } from '@components/ui';
import { useFormik } from 'formik';
import React from 'react';

const add = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
    isValidating
  } = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (err: any) {
        console.error(err);
        console.log(err);
        alert(err.message);
      }
    }
  });

  return (
    <Layout>
      <h1>add new books</h1>
      <p>add new product page can help you add new product</p>
      <form action="">
        <FormController required label="Title" id="title">
          <Input
            size="fluid"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Enter  Product title"
            touched={touched.title}
            error={errors.title}
          />
        </FormController>
        <FormController required label="Description" id="description">
          <Input
            size="fluid"
            name="description"
            value={values.description}
            onChange={handleChange}
            placeholder="Enter  Book description"
            touched={touched.description}
            error={errors.description}
          />
        </FormController>
      </form>
    </Layout>
  );
};

export default add;
