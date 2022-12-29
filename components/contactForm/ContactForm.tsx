import { useFormik } from 'formik';
import React from 'react';
import styles from '../../styles/components/Button.module.scss';

interface lead {
  name: string;
  phone?: number;
  email: string;
  message: string;
}

export const ContactForm = (): JSX.Element => {
  const initialValues: lead = {
    name: '',
    email: '',
    message: '',
  };

  const { values, handleSubmit, handleChange } = useFormik({
    onSubmit: () => {
      console.log(values);
    },
    initialValues,
  });
  return (
    <div>
      <div className=" flex justify-center">
        <form
          onSubmit={handleSubmit}
          className=" w-full max-w-sm text-white-ddev "
          style={{ fontFamily: "'DotGothic16'" }}
        >
          <div className=" border-b border-teal-500 py-2 my-4">
            <label htmlFor="">
              Nombre
              <input
                className="font-mono text-xl appearance-none bg-transparent border-none w-full text-center text-green-ddev mr-3 py-3 px-2 leading-tight focus:outline-none"
                onChange={handleChange}
                value={values.name}
                type="text"
                name="name"
              />
            </label>
          </div>
          <div className="border-b border-teal-500 py-2 my-4">
            <label htmlFor="">
              Email
              <input
                className="font-mono text-xl appearance-none bg-transparent border-none w-full text-center text-green-ddev mr-3 py-3 px-2 leading-tight focus:outline-none"
                onChange={handleChange}
                value={values.email}
                type="email"
                name="email"
              />
            </label>
          </div>
          <div className="border-b border-teal-500 py-2 my-4 ">
            <label htmlFor="">
              Mensaje
              <textarea
                className="font-mono text-xl appearance-none bg-transparent border-none w-full text-center text-green-ddev mr-3 py-3 px-2 leading-tight focus:outline-none"
                onChange={handleChange}
                value={values.message}
                name="message"
              />
            </label>
          </div>
          <div className="my-8 py-2 w-full">
            <button
              className={`${styles.ddevHoverButton} focus:outline-none text-green-ddev text-sm py-2.5 px-5 rounded-md border border-green-ddev transition duration-700 ease-in-out;`}
              type="submit"
            >
              Enviar{' '}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
