import React from "react";
import { nanoid } from "nanoid";
import phImg from "../components/ph-img.jpg";
export default function Navbar(props) {
  const exampleWorkHistory = [
    {
      id: nanoid(),
      workspace: "first work -position",
      startDate: "march 2020",
      endDate: "june 2021",
    },
    {
      id: nanoid(),
      workspace: "second -position",
      startDate: "march 2020",
      endDate: "june 2021",
    },
  ];

  const exampleFormData = {
    firstName: "tom",
    lastName: "was",
    jobPosition: "front-end Developer",
    email: "tom@was.com",
    tel: "123123123",
    linkedin: "www.link.com",
    github: "www.link.com",
    description:
      "short description of your work experience, short description of your work experience, short description of your work experience",
    photo: phImg,
  };
  const clearFormData = () => {
    Object.keys(props.formData).forEach((key) => {
      props.setFormData((prevState) => ({
        ...prevState,
        [key]: "",
      }));

      props.setWorkHistory([
        {
          id: nanoid(),
          workspace: "",
          startDate: "",
          endDate: "",
        },
      ]);
    });
  };

  function loadExampleData() {
    props.setFormData(exampleFormData);
    props.setWorkHistory(exampleWorkHistory);
  }
  return (
    <nav>
      <div className="logo">Resume Builder</div>
      <div className="btn-container">
        <button className="btn-nav" onClick={loadExampleData}>
          Load Example
        </button>
        <button className="btn-nav reset" onClick={clearFormData}>
          Reset
        </button>
        <button className="btn-nav print">Print</button>
      </div>
    </nav>
  );
}
