import React from "react";
import { useForm } from "react-hook-form";

import StaticComponents from "../StaticComponents/StaticComponents.component.jsx";
import FromTo from "../From-To/From-To.component.jsx";

import { SearchLocationsForm } from "./MyForm.styles.jsx";

const MyForm = () => {
  const { handleSubmit } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    console.log("Tic-Tac-Toe");
  };

  return (
    <SearchLocationsForm
      className="col-5 col-sm-4"
      onSubmit={handleSubmit(onSubmit)}
      data-test="MyFormWrapper"
    >
      <div className="d-flex flex-column justify-content-center">
        <FromTo />
        <StaticComponents />
      </div>
    </SearchLocationsForm>
  );
};

export default MyForm;
