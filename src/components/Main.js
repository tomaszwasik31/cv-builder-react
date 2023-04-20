import React from "react";
import phImg from "../components/ph-img.jpg";
import Preview from "./Preview";
import PersonalInputs from "./PersonalInputs";
import { nanoid } from "nanoid";
import AllWork from "./AllWork";

export default function Main() {
  const [workHistory, setWorkHistory] = React.useState([
    {
      id: nanoid(),
      workspace: "first work",
      startDate: "01.01.2020",
      endDate: "01.01.2020",
    },
  ]);

  const [formData, setFormData] = React.useState({
    firstName: "tom",
    lastName: "was",
    jobPosition: "front-end Developer",
    email: "tom@was.com",
    tel: "123123123",
    linkedin: "www.link.com",
    github: "www.link.com",
    description: "short description of your work experience",
    photo: phImg,
    workHistory: workHistory,
  });

  function handleChange(event) {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,

      [name]: name === "photo" ? URL.createObjectURL(files[0]) : value,
    }));
  }

  function handleWorkChange(event, id) {
    const { name, value } = event.target;

    setWorkHistory((prevWorkHistory) =>
      prevWorkHistory.map((work) => {
        if (work.id === id) {
          return { ...work, [name]: value };
        }
        return work;
      })
    );
  }

  function addWork() {
    setWorkHistory((prevData) => {
      return [
        ...prevData,
        {
          id: nanoid(),
          workspace: "new work",
          startDate: "01.01.2020",
          endDate: "01.01.2020",
        },
      ];
    });
  }
  function removeWork(event, id) {
    event.stopPropagation();

    setWorkHistory((prevData) => prevData.filter((work) => work.id !== id));
  }

  return (
    <div className="main-container">
      <form className="form-container">
        <PersonalInputs formData={formData} handleChange={handleChange} />

        <div className="form-section-container full">
          <h3 className="info-title">Work History</h3>

          <AllWork
            workHistory={workHistory}
            handleWorkChange={handleWorkChange}
            removeWork={removeWork}
            addWork={addWork}
          />
        </div>
      </form>

      <Preview formData={formData} />
    </div>
  );
}
