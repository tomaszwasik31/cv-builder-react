import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [formData, setFormData] = React.useState(
    JSON.parse(localStorage.getItem("formData")) || []
  );

  const [workHistory, setWorkHistory] = React.useState(
    JSON.parse(localStorage.getItem("workHistory")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("workHistory", JSON.stringify(workHistory));
  }, [workHistory]);

  React.useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

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
