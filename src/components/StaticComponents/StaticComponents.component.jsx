import React from "react";

import { Grid } from "@material-ui/core";

import { JourneyTypeContainer } from "./StaticComponents.styles.jsx";

const StaticComponents = () => {
  return (
    <div data-test="StaticComponentsWrapper">
      <JourneyTypeContainer className="col-12 mt-3 d-flex justify-content-center align-items-center">
        <div
          role="button"
          className="form-check mr-3 p-0 d-flex flex-column align-items-center justify-content-center"
        >
          <input
            role="button"
            type="radio"
            defaultChecked
            className="form-check-input d-inline-block ml-0"
            id="oneWay"
            name="journeyType"
            onChange={() => console.log("Aller simple")}
          />
          <label role="button" className="form-check-label" htmlFor="oneWay">
            Aller simple
          </label>
        </div>
        <div
          role="button"
          className="form-check ml-3 p-0 d-flex flex-column align-items-center justify-content-center"
        >
          <input
            role="button"
            type="radio"
            className="form-check-input d-inline-block ml-0"
            id="return"
            name="journeyType"
            onChange={() => console.log("Aller–Retour")}
          />
          <label role="button" className="form-check-label" htmlFor="return">
            Aller–Retour
          </label>
        </div>
      </JourneyTypeContainer>
      <Grid
        container
        className="col-12 mt-3 d-flex justify-content-center align-items-center"
      >
        <Grid container className="_rk5m7u col-sm-12">
          <Grid item xs={12} lg={6} className="my-2 justify-centent-center">
            <fieldset className="_6d98wc" data-test="outbound-datepicker">
              <legend className="_3ymhlp">
                <span>Aller</span>
              </legend>
              <div className="_iihd54">
                <button
                  aria-haspopup="false"
                  type="button"
                  className="_vkpkryNaN"
                  tabIndex="-1"
                  data-test="datepicker-same-day-button"
                >
                  <span>Aujourd’hui</span>
                </button>
                <button
                  aria-haspopup="false"
                  type="button"
                  className="_vkpkryNaN"
                  tabIndex="-1"
                  data-test="datepicker-next-day-button"
                >
                  <span>Demain</span>
                </button>
              </div>
              <div className="_e296pg">
                <div className="_1xkf6cj" data-test="date-picker-input-wrapper">
                  <div className="_oscnnj">
                    <svg
                      className="_ej02hh"
                      viewBox="0 0 8 5"
                      width="16px"
                      height="10px"
                      stroke="currentColor"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="1 1 3.77984472 4 6.53846154 1"></polyline>
                    </svg>
                  </div>
                  <input
                    type="text"
                    aria-label="Date use format: 01-Dec.-23"
                    aria-disabled="false"
                    name="page.journeySearchForm.outbound.title"
                    id="page.journeySearchForm.outbound.title"
                    value="22-Dec-22"
                    onChange={() => {}}
                    maxLength="35"
                    className="_12p3clnNaN"
                    data-test="date-input-field"
                    inputMode="text"
                  />
                </div>
              </div>
              <div className="_i2spsx">
                <div className="_1i1urt0">
                  <select
                    aria-label="Leaving at or Arrive by selector"
                    name="dateType"
                    className="_13aylj1c"
                    data-test="before-after-dropdown"
                    defaultValue=""
                  >
                    <option value="departAfter">Partir à</option>
                  </select>
                </div>
              </div>
              <div className="_gq764a">
                <div className="_1uztl9us">
                  <select
                    aria-label="hour"
                    name="hours"
                    className="_13aylj1c"
                    defaultValue=""
                  >
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                  </select>
                  <svg
                    className="_4swfi4"
                    viewBox="0 0 8 5"
                    width="16px"
                    height="10px"
                    stroke="currentColor"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="1 1 3.77984472 4 6.53846154 1"></polyline>
                  </svg>
                </div>
                <div className="_1uztl9us">
                  <select
                    aria-label="minutes"
                    name="minutes"
                    className="_13aylj1c"
                    defaultValue=""
                  >
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>
                  <svg
                    className="_4swfi4"
                    viewBox="0 0 8 5"
                    width="16px"
                    height="10px"
                    stroke="currentColor"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="1 1 3.77984472 4 6.53846154 1"></polyline>
                  </svg>
                </div>
              </div>
            </fieldset>
          </Grid>
          <Grid item xs={12} lg={6} className="my-2">
            <fieldset className="_6d98wc" data-test="inbound-datepicker">
              <legend className="_3ymhlp">
                <span>Retour</span>
              </legend>
              <div className="_iihd54">
                <button
                  aria-haspopup="false"
                  type="button"
                  className="_12i73cuNaN"
                  disabled=""
                  tabIndex="-1"
                  data-test="datepicker-same-day-button"
                >
                  <span>Même jour </span>
                </button>
                <button
                  aria-haspopup="false"
                  type="button"
                  className="_12i73cuNaN"
                  disabled=""
                  tabIndex="-1"
                  data-test="datepicker-next-day-button"
                >
                  <span>Jour suivant</span>
                </button>
              </div>
              <div className="_e296pg">
                <div
                  className="_1dxunp0c"
                  data-test="date-picker-input-wrapper"
                >
                  <div className="_oscnnj">
                    <svg
                      className="_ej02hh"
                      viewBox="0 0 8 5"
                      width="16px"
                      height="10px"
                      stroke="currentColor"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="1 1 3.77984472 4 6.53846154 1"></polyline>
                    </svg>
                  </div>
                  <input
                    type="text"
                    aria-label="Date use format: "
                    aria-disabled="true"
                    name="page.journeySearchForm.inbound.title"
                    id="page.journeySearchForm.inbound.title"
                    maxLength="35"
                    disabled=""
                    className="_spdx8kNaN"
                    data-test="date-input-field"
                    inputMode="text"
                  />
                </div>
              </div>
              <div className="_i2spsx">
                <div className="_v9dkmhm">
                  <select
                    aria-label="Leaving at or Arrive by selector"
                    name="dateType"
                    disabled=""
                    className="_13aylj1c"
                    data-test="before-after-dropdown"
                    defaultValue=""
                  >
                    <option value="departAfter">Partir à</option>
                  </select>
                </div>
              </div>
              <div className="_gq764a">
                <div className="_5zsm8kq">
                  <select
                    aria-label="hour"
                    name="hours"
                    disabled=""
                    className="_13aylj1c"
                  >
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                  </select>
                  <svg
                    className="_4swfi4"
                    viewBox="0 0 8 5"
                    width="16px"
                    height="10px"
                    stroke="currentColor"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="1 1 3.77984472 4 6.53846154 1"></polyline>
                  </svg>
                </div>
                <div className="_5zsm8kq">
                  <select
                    aria-label="minutes"
                    name="minutes"
                    disabled=""
                    className="_13aylj1c"
                  >
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>
                  <svg
                    className="_4swfi4"
                    viewBox="0 0 8 5"
                    width="16px"
                    height="10px"
                    stroke="currentColor"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="1 1 3.77984472 4 6.53846154 1"></polyline>
                  </svg>
                </div>
              </div>
              <div className="_1g4t0hn"></div>
            </fieldset>
          </Grid>
        </Grid>
        <hr className="_uwii1x4"></hr>
        <Grid item xs={12} className="_u8v19d mt-3">
          <button
            id="passenger-summary-btn"
            aria-expanded="false"
            aria-haspopup="true"
            type="button"
            className="_kvd4xo2"
            data-test="passenger-summary-btn-open"
          >
            <div className="_c5iz1w" style={{ fontWeight: "bold" }}>
              1 Adulte (26 - 59)
            </div>
            <div>
              <div className="_1lmxctq">
                <span>Ajouter des cartes et abonnements</span>
              </div>
            </div>
            <div className="_39fxt1">
              <svg
                className="_1jawgtw"
                viewBox="0 0 8 5"
                width="16px"
                height="10px"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="1 1 3.77984472 4 6.53846154 1"></polyline>
              </svg>
            </div>
          </button>
        </Grid>
        <Grid item xs={12} className="_11rhhtw mt-3">
          <button
            aria-haspopup="false"
            type="submit"
            className="_h9fi920"
            data-test="submit-journey-search-button"
          >
            <span>Rechercher</span>
            <div className="_153f9ln">
              <svg
                className="_18vm417"
                viewBox="0 0 8 5"
                width="16px"
                height="10px"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="1 1 3.77984472 4 6.53846154 1"></polyline>
              </svg>
            </div>
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default StaticComponents;
