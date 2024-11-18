import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm"; // Controlled Component Form
import FormikForm from "./components/FormikForm"; // Formik Form

function App() {
  return (
    <div className="App">
      <h1>User Registration</h1>
      <FormikForm /> {/* Use Formik Form */}
      {/* <RegistrationForm /> Uncomment to use controlled components */}
    </div>
  );
}

export default App;

