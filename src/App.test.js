import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./assets/testing";
import App from "./App";

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe("App Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "AppWrapper");
    expect(wrapper.length).toBe(1);
  });
});
