import React from "react";
import phImg from "../components/ph-img.jpg";
import Preview from "./Preview";
import { nanoid } from "nanoid";

export default function Main() {
  const [workHistory, setWorkHistory] = React.useState([
    {
      id: nanoid(),
      workspace: "first work",
      startDate: "01.01.2020",
      endDate: "01.01.2020",
    },
    {
      id: nanoid(),
      workspace: "second work",
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

  const allWork = () => {
    return workHistory.map((work, i) => (
      <div className="work-container" key={work.id}>
        <h3 className="work-counter">{`Workspace ${i + 1}`}</h3>

        <div className="work-inputs">
          <input
            type="text"
            placeholder="workspace"
            onChange={(e) => handleWorkChange(e, work.id)}
            name="workspace"
            value={work.workspace}
          />
          <input
            type="text"
            placeholder="start Date"
            onChange={(e) => handleWorkChange(e, work.id)}
            name="startDate"
            value={work.startDate}
          />
          <input
            type="text"
            placeholder="end Date"
            onChange={(e) => handleWorkChange(e, work.id)}
            name="endDate"
            value={work.endDate}
          />
          <button
            className="remove-work"
            onClick={(e) => removeWork(e, work.id)}
          >
            Remove
          </button>
        </div>
      </div>
    ));
  };

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
        <div className="form-section-container">
          <h3 className="info-title">Personal information</h3>

          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
          <input
            type="text"
            placeholder="Job Position"
            onChange={handleChange}
            name="jobPosition"
            value={formData.jobPosition}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <input
            type="tel"
            placeholder="Phone number"
            onChange={handleChange}
            name="tel"
            value={formData.tel}
          />
          <input
            type="url"
            placeholder="Linkedin"
            onChange={handleChange}
            name="linkedin"
            value={formData.linkedin}
          />
          <input
            type="url"
            placeholder="Github"
            onChange={handleChange}
            name="github"
            value={formData.github}
          />

          <textarea
            value={formData.description}
            placeholder="Description"
            onChange={handleChange}
            name="description"
            className="description"
          />
          <label>
            Select JPG file:
            <input
              type="file"
              accept=".jpg,.jpeg"
              name="photo"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-section-container full">
          <h3 className="info-title">Work History</h3>
          <div className="all-work-container">
            {allWork()}
            <button className="add-work" onClick={addWork}>
              New workspace
            </button>
          </div>
        </div>
      </form>

      <Preview formData={formData} />
    </div>
  );
}
