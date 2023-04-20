import React from "react";

export default function PersonalInputs(props) {
  return (
    <div className="form-section-container">
      <h3 className="info-title">Personal information</h3>

      <input
        type="text"
        placeholder="First Name"
        onChange={props.handleChange}
        name="firstName"
        value={props.formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={props.handleChange}
        name="lastName"
        value={props.formData.lastName}
      />
      <input
        type="text"
        placeholder="Job Position"
        onChange={props.handleChange}
        name="jobPosition"
        value={props.formData.jobPosition}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={props.handleChange}
        name="email"
        value={props.formData.email}
      />
      <input
        type="tel"
        placeholder="Phone number"
        onChange={props.handleChange}
        name="tel"
        value={props.formData.tel}
      />
      <input
        type="url"
        placeholder="Linkedin"
        onChange={props.handleChange}
        name="linkedin"
        value={props.formData.linkedin}
      />
      <input
        type="url"
        placeholder="Github"
        onChange={props.handleChange}
        name="github"
        value={props.formData.github}
      />

      <textarea
        value={props.formData.description}
        placeholder="Description"
        onChange={props.handleChange}
        name="description"
        className="description"
      />
      <label>
        Select JPG file:
        <input
          type="file"
          accept=".jpg,.jpeg"
          name="photo"
          onChange={props.handleChange}
        />
      </label>
    </div>
  );
}
