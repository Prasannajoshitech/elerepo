"use client";
import { useComplaintForm } from "@/hooks/useComplaintForm";
import React from "react";

const ComplaintForm: React.FC = () => {
  const {
    formik,
    document,
    inputRef,
    formErrors,
    handleFileChange,
    resetForm,
    isLoading,
  } = useComplaintForm();

  type FormValues = typeof formik.values;
  const renderInput = <T extends keyof FormValues>(
    name: T,
    label: string,
    type: string = "text",
    isTextArea: boolean = false
  ) => (
    <div className={`${isTextArea ? "col-span-1 md:col-span-2" : ""}`}>
      <label htmlFor={name} className="block mb-2 font-medium text-gray-700">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={label}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            formik.touched[name] && formik.errors[name]
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={`Enter your ${label}`}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            formik.touched[name] && formik.errors[name]
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
      )}
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {typeof formik.errors[name] === "string"
            ? formik.errors[name]
            : JSON.stringify(formik.errors[name])}
        </p>
      )}
    </div>
  );

  return (
    <div>
      <h3 className="text-2xl text-black font-semibold leading-[150%] pb-5 lg:pb-10">
        Submit a Complaint
      </h3>

      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        encType="multipart/form-data"
      >
        {renderInput("first_name", "First Name")}
        {renderInput("last_name", "Last Name")}
        {renderInput("phone_number", "Contact Number", "tel")}
        {renderInput("email", "Email Address", "email")}
        {renderInput("address", "Address")}

        <div>
          <label
            htmlFor="complain_type"
            className="block mb-2 font-medium text-gray-700"
          >
            Complaint Type
          </label>
          <select
            id="complain_type"
            name="complain_type"
            value={formik.values.complain_type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formik.touched.complain_type && formik.errors.complain_type
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <option value="">Select Complaint Type</option>
            <option value="Billing Issue">Billing Issue</option>
            <option value="Power Outage">Power Outage</option>
            <option value="Voltage Fluctuation">Voltage Fluctuation</option>
            <option value="Meter Problem">Meter Problem</option>
            <option value="Other">Other</option>
          </select>
          {formik.touched.complain_type && formik.errors.complain_type && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.complain_type}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="document"
            className="block mb-2 font-medium text-gray-700"
          >
            Upload Documents
          </label>
          <input
            ref={inputRef}
            id="document"
            name="document"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex items-center">
            <button
              type="button"
              className="bg-white px-6 py-2 text-blue-500 border border-blue-500 rounded-md"
              onClick={() => inputRef.current?.click()}
            >
              Choose File
            </button>
            <span className="text-gray-500 pl-3 py-2">
              {document ? document.name : "No File Chosen"}
            </span>
          </div>
          {formErrors.document && (
            <p className="text-red-500 text-sm mt-1">{formErrors.document}</p>
          )}
        </div>

        {renderInput("description", "Service Complaint", "text", true)}

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-7 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="px-7 py-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300"
          >
            Reset
          </button>
          <button
            type="button"
            className="px-7 py-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
