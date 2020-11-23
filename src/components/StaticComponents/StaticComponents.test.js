import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../assets/testing";
import StaticComponents from "./StaticComponents.component.jsx";

const setUp = (props = {}) => {
  const component = shallow(<StaticComponents {...props} />);
  return component;
};

describe("StaticComponents Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "StaticComponentsWrapper");
    expect(wrapper.length).toBe(1);
  });
});
