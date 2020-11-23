import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../assets/testing";
import Infos from "./Infos.component.jsx";

const setUp = (props = {}) => {
  const component = shallow(<Infos {...props} />);
  return component;
};

describe("Infos Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "InfosWrapper");
    expect(wrapper.length).toBe(1);
  });
});
