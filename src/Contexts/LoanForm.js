import { createContext } from "react";
export let loanInputContext = createContext({
  labelTitle: "",
  handleChange: null,
  valueInput: null,
});
