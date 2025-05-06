import React from "react";
import { useContext } from "react";
import { loanInputContext } from "./Contexts/LoanForm";
function MyInput() {
  const inputContext = useContext(loanInputContext);
  console.log("my input");
  console.log(inputContext);
  return (
    <>
      <label>{inputContext.labelName}:</label>
      <input
        value={inputContext.value}
        onChange={(event) => {
          inputContext.handleChange(event.target.value);
        }}
      />
    </>
  );
}

export default MyInput;
