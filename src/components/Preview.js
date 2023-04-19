import React from "react";

export default function Preview(props) {
  const data = props.formData;
  return (
    <div className="preview-container">
      <div className="preview-left">
        <img className="preview-photo" src={data.photo} alt="" />
        <h3 className="preview-heading">{`${data.firstName} ${data.lastName}`}</h3>
        <hr />
        <p className="preview-txt">{data.jobPosition}</p>
        <hr />
        <h3 className="preview-heading">Personal Information</h3>
        <hr />
        <div className="preview-links">
          <a href={`tel:${data.tel}`} className="preview-link">
            {data.tel}
          </a>
          <a href={`mailto:${data.mail}`} className="preview-link">
            {data.mail}
          </a>
          <a href={data.linkedin} className="preview-link">
            {data.linkedin}
          </a>
          <a href={data.github} className="preview-link">
            {data.github}
          </a>
        </div>
      </div>
      <div className="preview-right">asd</div>
    </div>
  );
}
