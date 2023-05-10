import React from "react";
import { nanoid } from "nanoid";
import Preview from "./Preview";
import PersonalInputs from "./PersonalInputs";

import AllWork from "./AllWork";

export default function Main(props) {
  const setFormData = props.setFormData;
  const formData = props.formData;
  const setWorkHistory = props.setWorkHistory;
  const workHistory = props.workHistory;

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

  function addWork(event) {
    event.preventDefault();
    setWorkHistory((prevData) => {
      return [
        ...prevData,
        {
          id: nanoid(),
          workspace: "new workspace -position",
          startDate: "start date",
          endDate: "end date",
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

      <Preview formData={formData} workHistory={workHistory} className="print-area" />
    </div>
  );
}
