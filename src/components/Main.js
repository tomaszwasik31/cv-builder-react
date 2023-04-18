import React from "react";
import phImg from "../components/ph-img.jpg";

export default function Main() {
  const [formData, setFormData] = React.useState({
    firstName: "tom",
    lastName: "was",
    email: "tom@was.com",
    tel: "123123123",
    linkedin: "www.link.com",
    github: "www.link.com",
    description: "short description of your work experience",
    photo: phImg,
  });

  function handleChange(event) {
    // Extract the name, value, and files properties from the event target
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,

      // Use a conditional (ternary) operator to determine the value of the property
      [name]: name === "photo" ? URL.createObjectURL(files[0]) : value,
    }));
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
        <div className="form-section-container">
          <h3 className="info-title">Work History</h3>
        </div>
      </form>
      <div className="preview-container">
        <img src={formData.photo} alt="" />
      </div>
    </div>
  );
}
