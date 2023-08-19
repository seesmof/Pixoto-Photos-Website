"use client";
import React from "react";

const TestingPage = () => {
  const showError = () => {
    console.error(
      "ERROR: Page did not reload! Introduced deep deeply window replace for man boat many greatly bigger account silence loose shut village stream ever street house except tobacco getting too! \nERROR_CODE: oqKQkg5Zi"
    );
    alert(
      "Warning! This is an alert! Please do not close this page! Remain calm and wait for the page to reload!"
    );
  };

  const showWarning = (): boolean => {
    console.warn(
      "Warning: This is a warning! Please do not close this page! Remain calm and wait for the page to reload!"
    );
    const outputValue = confirm("Warning! Do you want to close this page?");
    if (outputValue) {
      window.location.reload();
      return true;
    }
    return false;
  };

  return (
    <>
      <button onClick={showError} className="btn btn-red">
        Error
      </button>
      <button onClick={showWarning} className="btn btn-yellow">
        Warning
      </button>

      <form className="gap-2 flex flex-col bg-slate-800">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-inherit outline-none border-2 border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-inherit outline-none border-2 border-slate-200 rounded-md"
          />
        </div>
        <button
          onClick={() => {
            const confirmationValue = confirm("Submit?");
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default TestingPage;
