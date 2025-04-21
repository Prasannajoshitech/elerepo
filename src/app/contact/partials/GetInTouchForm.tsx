"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputTextarea from "@/components/InputTextArea";
import InputText from "@/components/InputText";

interface IContactFormValues {
  first_name: string;
  last_name: string;
  contact_number: string;
  email: string;
  description: string;
}

const GetInTouchForm = () => {
  const formik = useFormik<IContactFormValues>({
    initialValues: {
      first_name: "",
      last_name: "",
      contact_number: "",
      email: "",
      description: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters"),

      last_name: Yup.string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters"),

      contact_number: Yup.string()
        .required("Contact number is required")
        .matches(/^[0-9]{10}$/, "Contact number must be exactly 10 digits"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      description: Yup.string()
        .required("Description is required")
        .min(10, "Description must be at least 10 characters"),
    }),
    onSubmit: () => {},
  });
  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-8">
      <InputText
        label="First Name"
        name="first_name"
        placeholder="Enter Your First Name"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.first_name}
        touched={formik.touched.first_name}
      />
      <InputText
        label="Last Name"
        name="last_name"
        placeholder="Enter Your Last Name"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.last_name}
        touched={formik.touched.last_name}
      />
      <InputText
        label="Contact Number"
        name="contact_number"
        placeholder="Enter Your Contact Number"
        value={formik.values.contact_number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.contact_number}
        touched={formik.touched.contact_number}
      />
      <InputText
        label="Email"
        name="email"
        type="email"
        placeholder="Enter Your Email Address"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <div className="col-span-2">
        <InputTextarea
          label="What can we help you with?"
          name="description"
          placeholder="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.description}
          touched={formik.touched.description}
        />
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className="text-white px-7 py-3 rounded-lg typography-p-large-medium bg-blue-500 hover:bg-blue-400 transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default GetInTouchForm;
