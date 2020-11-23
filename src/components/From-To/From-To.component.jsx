import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { errorRenderer } from "../../assets/js/yupSchemas.js";

import SwapVerticalCircleIcon from "@material-ui/icons/SwapVerticalCircle";

import "./From-To.styles.sass";

const FromTo = () => {
  const [fromLocations, setFromLocations] = useState([]);
  const [toLocations, setToLocations] = useState([]);
  const [inputsState, setInputsState] = useState({
    isFromFocused: false,
    isToFocused: false,
    from: "",
    to: "",
  });

  const { register, errors, setValue } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    try {
      const getFromLocations = async () => {
        let url = "https://api.comparatrip.eu/cities/popular/5";

        if (inputsState.to.length) {
          url = `https://api.comparatrip.eu/cities/popular/from/${inputsState.to.toLowerCase()}/5`;
        }

        if (inputsState.from.length) {
          url = `https://api.comparatrip.eu/cities/autocomplete/?q=${inputsState.from.toLowerCase()}`;
        }

        const { data } = await Axios.get(url);

        setFromLocations(data);
      };

      getFromLocations();
    } catch (e) {
      console.log(e.message);
    }
  }, [inputsState.from, inputsState.to]);

  useEffect(() => {
    try {
      const getToLocations = async () => {
        let url = "https://api.comparatrip.eu/cities/popular/5";

        if (inputsState.from.length) {
          url = `https://api.comparatrip.eu/cities/popular/from/${inputsState.from.toLowerCase()}/5`;
        }

        if (inputsState.to.length) {
          url = `https://api.comparatrip.eu/cities/autocomplete/?q=${inputsState.to.toLowerCase()}`;
        }

        const { data } = await Axios.get(url);

        setToLocations(data);
      };

      getToLocations();
    } catch (e) {
      console.log(e.message);
    }
  }, [inputsState.from, inputsState.to]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
    setInputsState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const switchInputs = () => {
    const fromInput = inputsState.from;
    const toInput = inputsState.to;
    setInputsState({ ...inputsState, from: toInput, to: fromInput });
  };

  const capitalizeFirstLetter = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <div data-test="FromToWrapper">
      <div
        className="form-group my-1 row m-0"
        onBlur={() => setInputsState({ ...inputsState, isFromFocused: false })}
      >
        <label
          className="col-2 col-form-label text-center FormLabel"
          htmlFor="from"
        >
          Départ
        </label>
        <div className="col-10">
          <input
            ref={register({
              required: "Veuillez saisir une gare de départ",
            })}
            onFocus={() =>
              setInputsState({ ...inputsState, isFromFocused: true })
            }
            type="text"
            name="from"
            id="from"
            className="form-control"
            value={inputsState.from}
            onChange={(e) => onChange(e)}
          />
          {errorRenderer(errors, "from")}
        </div>
        {inputsState.isFromFocused && (
          <div className="from-locations locations-container">
            <ul className="locations">
              {fromLocations.every((location) => location.popular) && (
                <li className="popular-label">POPULAR</li>
              )}
              {fromLocations.map((loc) => (
                <li
                  className="location"
                  key={loc.gpuid}
                  data-location={capitalizeFirstLetter(loc.unique_name)}
                  onMouseDown={(e) =>
                    setInputsState({
                      ...inputsState,
                      from: capitalizeFirstLetter(loc.unique_name),
                      isFromFocused: false,
                    })
                  }
                >
                  <div className="suggested-location">
                    <span className="location-name">
                      {capitalizeFirstLetter(loc.unique_name)}
                    </span>
                    <span className="text-dark">
                      {loc.gpuid.split("|")[1].slice(0, 2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {inputsState.from && inputsState.to && (
        <button className="swapContainer" onClick={() => switchInputs()}>
          <SwapVerticalCircleIcon
            style={{
              fontSize: "50px",
            }}
            className="swapIcon"
          />
        </button>
      )}

      <div
        className="form-group my-1 row m-0"
        onBlur={() => setInputsState({ ...inputsState, isToFocused: false })}
      >
        <label
          className="col-2 col-form-label text-center FormLabel"
          htmlFor="to"
        >
          Arrivée
        </label>
        <div className="col-10">
          <input
            ref={register({ required: "Veuillez saisir une gare d’arrivée" })}
            type="text"
            name="to"
            id="to"
            className="form-control"
            value={inputsState.to}
            onChange={onChange}
            onFocus={() =>
              setInputsState({ ...inputsState, isToFocused: true })
            }
          />
          {errorRenderer(errors, "to")}
        </div>
        <div className="col-sm-2"></div>
        {inputsState.isToFocused && (
          <div className="to-locations locations-container col-sm-10">
            <ul className="locations">
              {toLocations.every((location) => location.popular) && (
                <li className="popular-label">POPULAR</li>
              )}
              {toLocations.map((loc) => (
                <li
                  className="location"
                  key={loc.gpuid}
                  onMouseDown={(e) =>
                    setInputsState({
                      ...inputsState,
                      to: capitalizeFirstLetter(loc.unique_name),
                      isToFocused: false,
                    })
                  }
                >
                  <div className="suggested-location d-flex justify-content-between">
                    <span className="location-name">
                      {capitalizeFirstLetter(loc.unique_name)}
                    </span>
                    <span className="text-dark">
                      {loc.gpuid.split("|")[1].slice(0, 2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FromTo;
