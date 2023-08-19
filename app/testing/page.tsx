"use client";
import React from "react";

const TestingPage = () => {
  return (
    <>
      <div className="flex flex-col p-4">Hi!</div>
      <button
        onClick={() => {
          console.log("Clicked");
          alert("Clicked");
        }}
        className="btn btn-fill mx-4"
      >
        Click
      </button>
    </>
  );
};

export default TestingPage;
