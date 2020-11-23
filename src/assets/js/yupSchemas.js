import React from "react";

export const errorRenderer = (errors, name) =>
  errors[name]?.message && (
    <span role="alert" className="text-danger">
      {errors[name].message}
    </span>
  );

