import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { nanoid } from "nanoid";
import phImg from "./components/ph-img.jpg";

function App() {
  const [workHistory, setWorkHistory] = React.useState([
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
  ]);

  const [formData, setFormData] = React.useState({
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
  });

  return (
    <div className="App">
      <Navbar
        formData={formData}
        setFormData={setFormData}
        workHistory={workHistory}
        setWorkHistory={setWorkHistory}
      />
      <Main
        workHistory={workHistory}
        setWorkHistory={setWorkHistory}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default App;
