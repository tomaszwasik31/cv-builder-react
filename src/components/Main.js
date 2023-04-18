import React, { useState } from "react";
import phImg from "../components/ph-img.jpg";

export default function Main() {
  const [formData, setFormData] = useState({
    firstName: "tom",
    lastName: "was",
    email: "tom@was.com",
    tel: "123123123",
    linkedin: "www.link.com",
    github: "www.link.com",
    description: "short description of your work experience",
    photo: phImg,
    workHistory: [
      {
        workspace: "first work",
        startDate: "01.01.2020",
        endDate: "01.01.2020",
      },
      {
        workspace: "second work",
        startDate: "01.01.2020",
        endDate: "01.01.2020",
      },
    ],
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "photo" ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleWorkChange = (index, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      workHistory: prevData.workHistory.map((work, i) =>
        i === index ? { ...work, [field]: value } : work
      ),
    }));
  };

  const allWork = () => {
    return formData.workHistory.map((work, index) => (
      <div key={index}>
        <h4>Work {index + 1}</h4>
        <input
          type="text"
          placeholder="Workspace"
          value={work.workspace}
          onChange={(e) => handleWorkChange(index, "workspace", e.target.value)}
        />
        <input
          type="text"
          placeholder="Start Date"
          value={work.startDate}
          onChange={(e) => handleWorkChange(index, "startDate", e.target.value)}
        />
        <input
          type="text"
          placeholder="End Date"
          value={work.endDate}
          onChange={(e) => handleWorkChange(index, "endDate", e.target.value)}
        />
      </div>
    ));
  };

  return (
    <div className="main-container">
      <form className="form-container">
        <div className="form-section-container">
          <h3 className="info-title">Personal information</h3>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Phone number"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
          />
          <input
            type="url"
            placeholder="Linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
          <input
            type="url"
            placeholder="Github"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
          <textarea
            placeholder="Description"
            name="description"
            value={formData.description}
            className="description"
            onChange={handleChange}
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
        <div className="form-section-container">
          <h3 className="info-title">Work History</h3>
          {allWork()}
        </div>
      </form>
      <div className="preview-container">
        <img src={formData.photo} alt="" />
      </div>
    </div>
  );
}
