'use client';
import React, { useState } from 'react';
import styles from '../styles/Form.module.css';
import { motion } from 'framer-motion';

const Form = () => {
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (values.name && values.email && values.phone) {
      setValid(true);
    }
    setSubmitted(true);
    setValues({
      name: '',
      email: '',
      phone: '',
    });
  };

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
     {submitted && valid ? (
            <p className={styles.successMessage}>Succes! Your request has been sent</p>
          ) : null}
      <div className={styles.wrapperLabel}>
        <label>Name:</label>
        {submitted && valid ? null : submitted && !values.name ? (
          <p className={styles.errorMessage}>* Please enter a First Name</p>
        ) : null}
      </div>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name..."
        value={values.name}
        onChange={handleChange}
      />

      <div className={styles.wrapperLabel}>
        <label>Email:</label>
        {submitted && valid ? null : submitted && !values.email ? (
          <p className={styles.errorMessage}>* Please enter a Valid Email</p>
        ) : null}
      </div>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="name@example.com"
        value={values.email}
        onChange={handleChange}
      />

      <div className={styles.wrapperLabel}>
        <label>Phone Nr:</label>
        {submitted && valid ? null : submitted && !values.phone ? (
          <p className={styles.errorMessage}>* Please enter a Phone nr</p>
        ) : null}
      </div>
      <input
        id="phone"
        name="phone"
        type="phone"
        placeholder="+46123456789"
        value={values.phone}
        onChange={handleChange}
      />
      <div className={styles.buttonContainer}>
        <motion.button
          type="submit"
          className={styles.submitBtn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit request
        </motion.button>
      </div>
    </form>
  );
};

export default Form;
