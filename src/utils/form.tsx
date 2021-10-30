import { useFormik } from 'formik';

const useForm = (initialValues: any, onSubmit: any) => {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        onSubmit();
      } catch (err: any) {
        console.error(err);
        console.log(err);
        alert(err.message);
      }
    }
  });
  return { formik };
};

export default useForm;
