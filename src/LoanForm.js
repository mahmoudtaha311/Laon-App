import React, { useContext, useState } from "react";
import "./FormStle.css";
import Modal from "./Modal";
import MyComponent from "./MyComponent";
import { loanInputContext } from "./Contexts/LoanForm";
import { userContext } from "./Contexts/UserContext";
function LoanForm() {
  const userData = useContext(userContext);

  const intialName = userData.userName;

  const [loanInputs, setLoanInputs] = useState({
    name: intialName,
    phoneNumber: "",
    age: "",
    isEmplyee: false,
    salaryRange: "",
  });
  const [showmodal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  function handelFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("phone Number format is incorrect");
    }
    setShowModal(true);
  }

  function handelDivClick() {
    if (showmodal === true) {
      setShowModal(false);
    }
  }

  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

  function handleNameInputChange(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }
  function handleAgeInputChange(value) {
    setLoanInputs({ ...loanInputs, age: value });
  }
  function handlePhoneNumberInputChange(value) {
    setLoanInputs({ ...loanInputs, phoneNumber: value });
  }
  return (
    <div
      className="flex"
      style={{ flexDirection: "column" }}
      onClick={handelDivClick}
    >
      <h1 style={{ color: "white" }}> hello {userData.userName}</h1>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a loan</h1>
        <hr></hr>
        <loanInputContext.Provider
          value={{
            value: loanInputs.name,
            handleChange: handleNameInputChange,
            labelName: "Name",
          }}
        >
          <MyComponent />
        </loanInputContext.Provider>

        <loanInputContext.Provider
          value={{
            value: loanInputs.phoneNumber,
            handleChange: handlePhoneNumberInputChange,
            labelName: "Phone Number",
          }}
        >
          <MyComponent />
        </loanInputContext.Provider>

        <loanInputContext.Provider
          value={{
            value: loanInputs.age,
            handleChange: handleAgeInputChange,
            labelName: "Age",
          }}
        >
          <MyComponent />
        </loanInputContext.Provider>

        <label style={{ marginTop: "30px" }}>Are you employee ?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmplyee}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, isEmplyee: e.target.checked });
          }}
        />

        <label>Salary:</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, salaryRange: e.target.value });
          }}
        >
          <option> less than 500$</option>
          <option> between 500$ and 2000$</option>
          <option> above 2000$</option>
        </select>

        <button
          className={btnIsDisabled ? "disabled" : ""}
          id="submit-loan-btn"
          disabled={btnIsDisabled}
          onClick={handelFormSubmit}
        >
          submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showmodal} />
    </div>
  );
}

export default LoanForm;
