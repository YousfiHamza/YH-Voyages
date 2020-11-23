import React from "react";
import "./App.css";

import MyForm from "./components/MyForm/MyForm.component.jsx";
import Header from "./components/Header/Header.component.jsx";
import Infos from "./components/Infos/Infos.component.jsx";

const HTitle = "Voyagez en train et en bus, en France, en Europe";
const HSubtitle =
  "Comparez les tarifs en un clin d'œil et achetez vos billets au meilleur prix";

function LocationsForm() {
  return (
    <div
      className="App text-white row d-flex justify-content-center align-items-start"
      data-test="AppWrapper"
    >
      <Header title={HTitle} subTitle={HSubtitle} />
      <MyForm />
      <Infos />
    </div>
  );
}

export default LocationsForm;
